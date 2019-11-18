#古风博物院官网API设计
##API url
	http://localhost:8080/api/

#数字文物库API接口
##数据类型JSON
###文物数据库字段
	addTime: 添加时间
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
	updateTime: 更新时间
	uuid: 通用唯一标识符
	viewCount: 查看次数
###请求返回JSON字段
	currentPage: 当前请求页从1开始
	pagecount: 总页数
	pagesize: 当前页数显示数量
	rows: 返回当前请求的文物数据库字段数组