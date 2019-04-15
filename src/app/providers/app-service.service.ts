import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService{
  
  constructor() {

  }

  componentsHeaders = [{ 
    name:'组件',
    state: 'default',
 
  }, {
    name: '设置',
    state: 'settings'
  }]

  componentModules = [{ 
    name:'基础',
    title:"基础组件,多为HTML元素组件",
    state: 'default',
    compList: [
      {
        name:'文本',
        type: 'text',
        iconUrl: './../assets/icons/text.svg'
      },{
        name:'单行输入',
        type: 'input',
        iconUrl: './../assets/icons/input.svg'
      },{
        name:'多行输入',
        type: 'textarea',
        iconUrl: './../assets/icons/textarea.svg'
      },{
        name:'按钮',
        type: 'button',
        iconUrl: './../assets/icons/mtbutton.svg'
      },{
        name:'图片',
        type: 'img',
        iconUrl: './../assets/icons/image.svg'
      },{
        name:'视频',
        type: 'video',
        iconUrl: './../assets/icons/video.svg'
      },]
  }, {
    name: '业务',
    state: 'module',
    title:"高级组件,支持数据绑定和接口绑定,支持定制",
    compList: [
      {
        name:'折线',
        type: 'chart',
        iconUrl: './../assets/icons/zhexian.svg'
      },{
        name:'结构树',
        type: 'tree',
        iconUrl: './../assets/icons/tree.svg'
      },{
        name:'列表',
        type: 'list',
        iconUrl: './../assets/icons/list.svg'
      }]
  },
  {
    name: '模板',
    state: 'template',
    title:"复杂组件,由多个基础或者高级组件组成,支持数据绑定和接口绑定,支持定制",
    compList: [
      {
        name:'Tabs',
        type: 'tabs',
        iconUrl: './../assets/icons/tabs.svg'
      }]
  }]


  //后台测试数据
  testCreateComp = [{
    compIndex: 3,
    name:'Tabs',
    type:'tabs',
    data: {
        'name':'tabs'
    },
    style: {
      height:700,
      width: 500,
      position: 'absolute',
      top:10,
      left:400,
      border: '',
      borderColor: '',
      borderWidth: 0,
      borderStyle: ''
    }
  }];

  auxiComp = {
    compIndex: 1000,
    name:'辅助线',
    type:'auxi',
    data: {
      title: '辅助线'
    },
    style: {
      height:220,
      width: 300,
      position: 'absolute',
      top:120,
      left:600,
      border: '',
      borderColor: '',
      borderWidth: 0,
      borderStyle: ''
    }
  }

  getAuxiComp() {
    return this.auxiComp;
  }


  getTestCreateComp() {
    return this.testCreateComp;
  }

  getComponentHeaders() {
    return this.componentsHeaders;
  }

  getComponentModeules() {
    return this.componentModules;
  }
 
}
