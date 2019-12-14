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
  width: 1080px;
  min-width: 1080px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  h1 {
    text-align: center;
    margin: 50px 0 50px 0;
  }
  p {
    font-family: "Microsoft YaHei UI";
    padding: 0 50px 0 50px;
    text-indent: 2em;
    line-height: 2em;
    font-size: 1.2em;
  }
  .text {
    margin-bottom: 50px;
  }
  .QRcode {
    margin-bottom: 20px;
    text-align: center;
    ul {
      margin-top: 20px;
      list-style: none;
    }
    li {
      text-align: center;
      display: inline-block;
    }
    span {
      font-family: "Microsoft YaHei UI";
      font-size: 1.2em;
      font-weight: bold;
      display: block;
    }
    .imgQR {
      width: 200px;
      height: 200px;
    }
    h2 {
      margin-bottom: 20px;
    }
  }
}
</style>

<template>
  <div>
    <div class="backImg">
      <el-image :src="backImg" fit="cover"></el-image>
    </div>
    <div class="content">
      <div class="mainContent">
        <div class="text">
          <h1>贵州毋敛古风博物院管理有限公司</h1>
          <p>贵州毋敛古风博物院管理有限公司位于贵州省黔南布依族苗族自治州独山县，是一家以历史与艺术并重，集文物收藏、展示、研究、文创、交流和知识传播为一体的综合性、现代化公司。公司旗下在独山运营的古风博物馆群包括如意苑博物馆、乐殿博物馆、汉唐风韵博物馆、明清瓷器博物馆、历代宫廷金银器博物馆、圣贤文化园、文化交流中心等。</p>
          <p>2019年8月8日，恰逢黔南布依族苗族自治州成立63周年大庆，乐殿音乐舞蹈题材博物馆和如意苑福寿专题博物馆率先盛大开馆。乐殿博物馆占地面积42亩，主要展出汉唐时期音乐舞蹈类的珍贵藏品，如金银乐器、金银乐俑、汉唐乐俑、舞俑、古琴、古瑟等，两馆馆藏达300余件。</p>
          <p>如意苑博物馆，是中国福寿吉祥文化专题博物馆，占地约62亩分为“展览陈列”、“文化交流”、“游客服务”、与“办公学术研究”四大区域。主要展出清宫如意等福寿吉祥文化的藏品以及唐宋到清代的佛教艺术珍品。</p>
          <p>馆藏中的唐代金累丝福禄寿如意富丽堂皇，美轮美奂；目前所见最大如意，堪称“如意王” 的清乾隆金镶玉如意也存于馆中；以水晶打造的南北朝时期水晶佛首，为馆藏佛造像中之珍品。</p>
          <p>乐殿博物馆占地42亩，共三层，展区分布于二、三层。以汉、唐时期的陶、金、银制作的乐舞佣和乐器为主。</p>
          <p>乐殿博物馆馆藏汉代乐舞俑基本为陶制，其艺术特征为取大势、去繁缛以及高度概括的表现手法，整体古朴淳厚、雄浑大气。经历沧桑岁月，依然挥洒着蓬勃的生命力。唐金乐舞俑则是唐代乐舞与金银器制作工艺结合的艺术高峰。其中一座金制反弹琵琶，生动刻划出唐代乐舞的高超水平，具有极高的历史、艺术和科学价值。这些珍贵的艺术藏品，将汉唐乐舞盛世浓缩于乐殿博物馆中，辅以现代科技和多媒体演示，重现一个中国古代音乐殿堂。</p>
          <p>自开馆以来，精美的藏品吸引了无数国内外游客前来参观，之后，古风公司将陆续开放汉唐风韵博物馆、明清瓷器博物馆、历代宫廷金银器博物馆和圣贤文化园四个博物馆，藏品总数达千余件，涵盖了西周、秦、汉、唐、宋、元、明、清、民国各个时期的青铜、彩陶、金银器、金镶玉、金镶翡翠、镂丝器皿等中华精湛工艺，内容包括西周祭器、秦青铜车马、汉屋、汉俑、汉乐俑、唐三彩、唐代佛造像、唐乐俑、唐代彩陶、唐宫乐礼器、宋代佛造像、唐代宫藏金银器、明清时期宫藏金银器和朝制用品等。这些历史文物从不同角度反映了中国历代社会的政治、经济、文化以及生活状况，具有极高的文化价值、艺术价值与历史价值。值得一提的是，馆中藏品大部分是从海外抢救回来，具有特殊的历史意义。</p>
          <p>独山县在历史上，是赫赫有名的毋敛古国，与夜郎、且兰并称为秦汉时期贵州境内三大古国，有着深厚的文化底蕴。在独山县委、县政府的大力支持下，古风公司在举办展览的同时，将积极组织与国内外博物馆之间的交流活动，并举办国学讲堂，邀请国内权威大家授课，正国学之风，扬传统文化，通过文博的带动，辅助独山旅游、商贸、物流等百业发展，让毋敛古国这颗文化明珠在全国、乃至全世界的舞台上重放异彩。</p>
        </div>
        <!-- 二维码展示 -->
        
        <a name="QRcode" >
          <div class="QRcode">
            <h2>各平台二维码</h2>
            <hr />
            <ul>
              <li v-for="item in QRcode" :key="item.id">
                <span>{{item.title}}</span>
                <el-image class="imgQR" :src="item.imgsrc" fit="contain"></el-image>
              </li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import backImg from "@/assets/about/backimg.jpg";

// 二维码
import wxQR1 from "@/assets/QRcode/wxQR1.jpg";
import wxQR2 from "@/assets/QRcode/wxQR2.jpg";
import dyQR2 from "@/assets/QRcode/dyQR.jpg";
import ksQR from "@/assets/QRcode/ksQR.jpg";
import wbQR from "@/assets/QRcode/wbQR.png";

export default {
  data() {
    return {
      backImg: backImg,
      QRcode: [
        { id: 1, imgsrc: wxQR1, title: "微信订阅号" },
        { id: 2, imgsrc: wxQR2, title: "微信订阅号" },
        { id: 3, imgsrc: wbQR, title: "微博二维码" },
        { id: 4, imgsrc: ksQR, title: "快手短视频" },
        { id: 5, imgsrc: dyQR2, title: "抖音号短视频" }
      ]
    };
  }
};
</script>

