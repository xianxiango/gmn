package model

import (
	"fmt"
	db "gmn/db/center"
	"time"
)

type Imagelist struct {
	ID         int       `json:"ID" xorm:"ID"`
	Title      string    `json:"Title" xorm:"Title"`
	Content    string    `json:"Content" xorm:"Content"`
	Url        string    `json:"Url" xorm:"Url"`
	IsShow     int       `json:"IsShow" xorm:"IsShow"`
	Module     int       `json:"Module" xorm:"Module"`
	Sort       int64     `json:"Sort" xorm:"Sort"`
	Createtime time.Time `json:"CreateTime" xorm:"CreateTime"`
	Updatetime time.Time `json:"UpdateTime" xorm:"UpdateTime"`
}

type Textlist struct {
	ID         int       `json:"ID" xorm:"ID"`
	Content    string    `json:"Content" xorm:"Content"`
	Module     int       `json:"Module" xorm:"Module"`
	Createtime time.Time `json:"CreateTime" xorm:"CreateTime"`
	Updatetime time.Time `json:"UpdateTime" xorm:"UpdateTime"`
}
func (c *Imagelist) TableName() string {
	return "Imagelist"
}

func NewImagelist() *Imagelist {
	return &Imagelist{}
}


func GetImageList(module,offset, pageSize int) ([]Imagelist, int64) {
	var ads = []Imagelist{}
	cmd := fmt.Sprintf("select * from imagelist where module = %d order by Sort desc,CreateTime desc limit %d,%d", module, offset, pageSize)
	type T struct {
		Total int64
	}
	var total T
	totalsql := fmt.Sprintf(`select COUNT(*) as Total from imagelist where module = %d `, module)
	err := db.GetDB().Sql(cmd).Find(&ads)
	_, err = db.GetDB().Sql(totalsql).Get(&total)
	if err != nil {
		panic(err)
	}

	if err != nil {
		panic(err)
	}

	return ads, total.Total
}


func GetTextlist(module int) []Textlist {
	var ad []Textlist

	sql := fmt.Sprintf("select * from textlist where module = %d",module)
	err := db.GetDB().Sql(sql).Find(&ad)
	if err != nil {
		panic(err)
	}
	return ad
}