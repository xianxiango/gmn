package controllers

import (
	center "gmn/models/center"
)
type InfoController struct {
	BaseController
}

func (this *InfoController) List() { //获取列表
	module, _ := this.GetInt("module")
	activities, total := center.GetImageList(module,this.Page.Offset, this.Page.PageSize)

	this.jsonResult(map[string]interface{}{
		"message": "操作成功",
		"code":    0,
		"data": map[string]interface{}{
			"list":      activities,
			"total":     total,
			"page_no":   this.Page.PageNo,
			"page_size": this.Page.PageSize,
		},
	})
}
func (this *InfoController) Text() { //获取列表
	module, _ := this.GetInt("module")
	activities, total := center.GetImageList(module,this.Page.Offset, this.Page.PageSize)

	this.jsonResult(map[string]interface{}{
		"message": "操作成功",
		"code":    0,
		"data": map[string]interface{}{
			"list":      activities,
			"total":     total,
			"page_no":   this.Page.PageNo,
			"page_size": this.Page.PageSize,
		},
	})
}
