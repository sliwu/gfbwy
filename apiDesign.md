#古风博物院官网API设计
----------
###API url 默认全部post
	http://localhost:8080/api

##数字文物库API接口
###一共三个数据库
```
1. 文物数据库
```
```
2. 文物藏品类别数据库
```
```
3. 文物朝代类别数据库
```
###url
	/sszwk/queryAll
###接口data
	data:{
	page: 请求页数
	keyWord: 关键字可为空，空值返回当前页
	authorizeStatus: 授权状态布尔值默认false
	hasImage: 是否有图片 布尔值 true返回图片
	cateList: 类别表示类型Number，如果没有该字段返回所有，如果有多个返回多个类别数据，对应藏品名称侧边栏数据请求id字段
	ranNum: 随机数防止浏览器载入缓存页面
	}
###数据类型JSON
####请求返回JSON字段
	currentPage: 当前请求页从1开始
	pagecount: 总页数
	pagesize: 当前页数显示数量
	rows: 返回当前请求的[文物数据库字段]数组
####返回的文物数据库字段
	addTime: 字段信息添加时间
	addTimeStamp: 时间戳
	author: 作者
	bigImage: 详情大图路径
	categoryId: 类别编号
	categoryName: 类别名称
	centerImage: 详情图路径
	centerImgHeight: 详情图路径高度
	centerImgWidth: 详情图路径宽度
	collectCount: 收藏计数器
	culturalRelicNo: 文物字编号
	delFlag: 删除标记 0没删除 1删除
	dynastyId: 王朝编号
	dynastyName: 王朝名称
	dynastySort: 王朝分类
	hasImage: 是否有图片 0没有图片 1有图片
	id: 文物id
	imageId: 图片id null无
	isActive: 是否活跃
	levelId: 等级ID
	levelName: 等级名称
	materialId: 物料编号
	materialName: 物料名称
	name: 物品名称
	position: 位置id
	rsize: 大小
	smallImage: 缩略图路径
	surveyNo: 调查编号
	titleName: 标题名称
	updateTime: 字段信息更新时间
	uuid: 通用唯一标识符,通过该参数获取详情页信息
	viewCount: 查看次数
###藏品名称侧边栏数据请求URL地址
	/sszwk/categoryList
#####请求参数
	data:{
	ranNum: 随机数防止浏览器载入缓存页面
	}
#####藏品名称返回数据
	data:{
	addTime: 字段信息添加时间
	delFlag: 删除标记 0没删除 1删除
	id: 类别对应的ID
	image: 路径地址
	isActive: 是否活跃
	name: 藏品名称
	position: 排序位置
	updateTime: 字段信息更新时间
	}
####藏品朝代数据请求URL
	/sszwk/dynastyList
#####请求参数
	data:{
	ranNum: 随机数防止浏览器载入缓存页面
	}
#####藏品朝代返回数据
	data:{
	addTime: 字段信息添加时间
	delFlag: 删除标记 0没删除 1删除
	id: 王朝id
	name: 藏品王朝
	position: 排序位置
	updateTime:  字段信息更新时间
	}
####文物数据库详情页URL
	GET方式
	url:/sszwk/cultural/detail
#####请求参数
	id: 物品详情页uuid获取当前藏品全部信息


