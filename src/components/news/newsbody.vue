<style lang="less" scoped>
.backImg {
  height: 100%;
  display: flex;
  justify-content: center;
}

.content {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.mainContent {
  width: 80%;
  min-width: 1080px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
}

// 新闻版块
.topMain {

  width: 100%;
  height: 360px;
  padding-top: 50px;
  display: flex;
  // 新闻左边
  .newsLeft {
    padding-left: 30px;
    padding-right: 10px;
    width: 50%;
    display: inline-block;
    // 新闻咨询
    .leftNews {
      
      border-bottom: 2px solid #2774c1;
      padding-bottom: 8px;
      width: 100%;
      font-weight: bold;
      font-size: 1.6em;
      font-family: "Microsoft YaHei UI";

      .zxHot {
        border-bottom: 2px solid #bc0000;
        padding-bottom: 8px;
      }
      .hotPoint {
        padding: 0 10px 0 10px;
        border-radius: 12px;
        background: #2774c1;
        color: white;
      }
    }
    // 新闻内容
    .newsContent {
      width: 100%;
      list-style: none;
      font-size: 1.2em;
      padding-top: 20px;
      a {
        font-family: "Microsoft YaHei UI";
        font-weight: bold;
        text-decoration: none;
        color: black;
      }
      a:hover {
        color: #2774c1;
      }
      // 新闻内容ul
      .leftContent {

        display: inline-block;
        width: 90%;
        margin-top: 10px;
          li{
            padding-left:20px; 
          }
      }
      // 日期
      .rightDate {
        margin-top: 10px;
        width: 10%;
        display: inline-block;
        text-align: center;
      }

      li {

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 10px;
      }
    }
  }

  // 新闻右边
  .rightImg {
    padding-left: 10px;
    padding-right: 10px;
    display: inline-block;
    width: 50%;
  }
}
// 活动新闻展览版块
.botMain {
  padding-top: 50px;
  width: 100%;
  ul {
    text-align: center;
    width: 100%;
    list-style: none;

    a {
      font-family: "Microsoft YaHei UI";
      font-weight: bold;
      text-decoration: none;
      text-decoration: none;
      color: rgb(88, 88, 88);
    }
    a:hover {
      color: #2774c1;
    }
    .liNews {
      border-right: 2px solid #eee;
    }
    .liFestival {
      border-right: 2px solid #eee;
    }
  }
  li {
    padding: 0 10px 0 10px;
    width: 30%;
    display: inline-block;
  }
  h2 {
    margin: 50px 0 20px 0;
  }
  h3 {
    border-bottom: 2px solid #eee;
    margin: 10px 0 10px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.2em;
  }
}
</style>>

<template>
  <div>
    <div class="backImg">
      <el-image :src="backImg" fit="cover"></el-image>
    </div>
    <div class="content">
      <div class="mainContent">
        <div class="topMain">
          <!-- 新闻左边 -->
          <div class="newsLeft">
            <!-- 咨询标题 -->
            <div class="leftNews">
              <span class="zxHot">
                资讯
                <span class="hotPoint">热点</span>
              </span>
            </div>
            <!-- 新闻内容 -->
            <div class="newsContent">
              <ul class="leftContent">
                <li v-for="item in newsInfo" :key="item.id">
                  <a :href="item.src" :title="item.title">
                    <span>{{item.title}}</span>
                    <br />
                  </a>
                </li>
              </ul>
              <!-- 新闻日期 -->
              <ul class="rightDate">
                <li v-for="item in newsInfo" :key="item.id">
                  <a :href="item.src" :title="item.title">
                    <span>{{item.date}}</span>
                    <br />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 新闻右边 -->
          <!--新闻轮播图  -->
          <div class="rightImg">
            <el-carousel :interval="4000">
              <el-carousel-item v-for="item in newsInfo" :key="item.id">
                <a :href="item.src">
                  <el-image style="height: 100%;" :src="item.imgSrc" fit="contain"></el-image>
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>

        <hr>
        <hr>
        <hr>
        <hr>
        <!-- 活动 咨询 新闻模块 -->
        <div class="botMain">
          <ul>
            <!-- 新闻 -->
            <li class="liNews">
              <h2>活动咨询</h2>
              <el-image style="height: 100%;" :src="news" fit="contain"></el-image>
              <br />
              <a v-for="item in newsInfo" :key="item.id" :href="item.src" :title="item.title">
                <h3>{{item.title}}</h3>
              </a>
            </li>
            <!-- 活动 -->
            <li class="liFestival">
              <h2>新闻咨询</h2>
              <el-image style="height: 100%;" :src="festival" fit="contain"></el-image>
              <br />
              <a v-for="item in festivalInfo" :key="item.id" :href="item.src" :title="item.title">
                <h3>{{item.title}}</h3>
              </a>
            </li>
            <!-- 展览 -->
            <li class="liPrev">
              <h2>展览咨询</h2>
              <el-image style="height: 100%;" :src="prev" fit="contain"></el-image>
              <br />
              <a v-for="item in prveInfo" :key="item.id" :href="item.src" :title="item.title">
                <h3>{{item.title}}</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backImg from "@/assets/news/backimg.jpg";
import news from "@/assets/news/news.png";
import festival from "@/assets/news/festival.png";
import prev from "@/assets/news/prev.png";

export default {
  name: "newsbody",
  data() {
    return {
      backImg: backImg,
      news: news,
      festival: festival,
      prev: prev,
      newsInfo: this.$store.getters.getNewsInfo,
      festivalInfo: this.$store.getters.getNewsInfo,
      prveInfo: this.$store.getters.getNewsInfo
    };
  },
  methods: {}
};
</script>