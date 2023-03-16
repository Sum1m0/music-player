//查询地址：https://autumnfish.cn/search    get  keywords（查询关键字）
//歌曲地址： https://autumnfish.cn/song/url  get   id 响应为：歌曲的url
//歌曲封面：https://autumnfish.cn/song/detail   get ids
//评论 ：https://autumnfish.cn/comment/hot get 歌曲id type固定为0
var app = new Vue({
    el:"#music",
    data:{
        query:'',
        musiclist:[],
        musicUrl:'',
        picUrl:'',
        hotComments:'',
    },
    methods:{
        keyenter:function(){
            var that = this;
            axios.get('https://autumnfish.cn/search?keywords='+this.query)
            .then(function(Response){
               // console.log(Response);
                that.musiclist=Response.data.result.songs;
               // console.log(Response.data.result.songs);
            },function(err){});
        },

        playMusic:function(musicId){
            //console.log(musicId);
            var that =this;
            axios.get('https://autumnfish.cn/song/url?id='+musicId)
            .then(function(Response){
                //歌曲的连接获取
                //console.log(Response.data.data[0].url);
                that.musicUrl=Response.data.data[0].url;
            },function(err){});

            //封面获取
            axios.get('https://autumnfish.cn/song/detail?ids='+musicId)
            .then(function(Response){
                //歌曲的连接获取
               // console.log(Response);
                //console.log(Response.data.songs[0].al.picUrl);
                that.picUrl=Response.data.songs[0].al.picUrl
            },function(err){});

            //评论获取
            axios.get('https://autumnfish.cn/comment/hot?type=0&id='+musicId)
            .then(function(Response){
                //歌曲的连接获取
               console.log(Response);
                console.log(Response.data.hotComments);
                that.hotComments=Response.data.hotComments;
            },function(err){});

       
        },




    }



})
