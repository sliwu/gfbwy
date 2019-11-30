<style lang="less" scoped>
    .sortbar {
        width: 14%;
        background-color: #00636a;
        display: inline-block;
        overflow: auto;
         margin-bottom: -4px;
    }
    .collSort{
        display: flex;
        justify-content: center;
        ul{
            list-style: none;
            margin-top: 50px;
        }
        li{
            margin-top: 10px;
        }

    }
</style>

<template>
    <div class="sortbar" :style="{height:height+'px'}">

        <div class="collSort" style="margin-top: 50px">
            藏品分类
        </div>
        <div class="collSort">
            <ul>
                <li v-for="item in collsortInfo" :key="item.id">
                    {{item.name}}
                </li>
            </ul>
        </div>

    </div>
</template>


<script>

    export default {
        name: "sortbar",
        components: {},
        data() {
            return {
              collsortInfo:[
                {
                  id:0,
                  name: '绘画',
                },{
                  id:1,
                  name: '绘画',
                },{
                  id:2,
                  name: '绘画',
                },{
                  id:3,
                  name: '绘画',
                },{
                  id:4,
                  name: '绘画',
                },{
                  id:5,
                  name: '绘画',
                }
              ]
            };
        },
        methods: {},
      props:{
          height:Number
      }
    };
</script>

