import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import styled from '@emotion/styled';
import { component, color } from './Common';
import Pic00000 from './assets/00000.png';
import huihua1 from './assets/huihua/huihua1.png'
import huihua2 from './assets/huihua/huihua2.png'
import huihua3 from './assets/huihua/huihua3.png'
import huihua4 from './assets/huihua/huihua4.png'
import huihua5 from './assets/huihua/huihua5.png'
import huihua6 from './assets/huihua/huihua6.png'
import huihua7 from './assets/huihua/huihua7.png'
import huihua8 from './assets/huihua/huihua8.png'
import huihua9 from './assets/huihua/huihua9.png'
import huihua10 from './assets/huihua/huihua10.png'
import huihua11 from './assets/huihua/huihua11.png'
import huihua12 from './assets/huihua/huihua12.png'
import huihua13 from './assets/huihua/huihua13.png'
import huihua14 from './assets/huihua/huihua14.png'
import huihua15 from './assets/huihua/huihua15.png'
import huihua16 from './assets/huihua/huihua16.png'
import huihua17 from './assets/huihua/huihua17.png'
import huihua18 from './assets/huihua/huihua18.png'
import huihua19 from './assets/huihua/huihua19.png'
import huihua20 from './assets/huihua/huihua20.png'
import huihua21 from './assets/huihua/huihua21.png'
import huihua22 from './assets/huihua/huihua22.png'
import huihua23 from './assets/huihua/huihua23.png'
import huihua24 from './assets/huihua/huihua24.png'
import huihua25 from './assets/huihua/huihua25.png'
import huihua26 from './assets/huihua/huihua26.png'
import huihua27 from './assets/huihua/huihua27.png'
import huihua28 from './assets/huihua/huihua28.png'
import huihua29 from './assets/huihua/huihua29.png'
import huihua30 from './assets/huihua/huihua30.png'
import huihua31 from './assets/huihua/huihua31.png'
import huihua32 from './assets/huihua/huihua32.png'
import huihua33 from './assets/huihua/huihua33.png'
import yishu1 from './assets/yishu/yishu1.png'
import yishu2 from './assets/yishu/yishu2.png'
import yishu3 from './assets/yishu/yishu3.png'
import yishu4 from './assets/yishu/yishu4.png'
import yishu5 from './assets/yishu/yishu5.png'
import yishu6 from './assets/yishu/yishu6.png'
import yishu7 from './assets/yishu/yishu7.png'
import yishu8 from './assets/yishu/yishu8.png'
import yishu9 from './assets/yishu/yishu9.png'
import yishu10 from './assets/yishu/yishu10.png'
import yishu11 from './assets/yishu/yishu11.png'
import yishu12 from './assets/yishu/yishu12.png'
import yishu13 from './assets/yishu/yishu13.png'
import yishu14 from './assets/yishu/yishu14.png'
import yishu15 from './assets/yishu/yishu15.png'
import yishu16 from './assets/yishu/yishu16.png'
import yishu17 from './assets/yishu/yishu17.png'
import yishu18 from './assets/yishu/yishu18.png'
import yishu19 from './assets/yishu/yishu19.png'
import yishu20 from './assets/yishu/yishu20.png'
import yishu21 from './assets/yishu/yishu21.png'
import yishu22 from './assets/yishu/yishu22.png'
import yishu23 from './assets/yishu/yishu23.png'
import yishu24 from './assets/yishu/yishu24.png'
import yishu25 from './assets/yishu/yishu25.png'
import yishu26 from './assets/yishu/yishu26.png'
import yishu27 from './assets/yishu/yishu27.png'
import yishu28 from './assets/yishu/yishu28.png'
import shenghuo1 from './assets/shenghuo/shenghuo1.png'
import shenghuo2 from './assets/shenghuo/shenghuo2.png'
import shenghuo3 from './assets/shenghuo/shenghuo3.png'
import shenghuo4 from './assets/shenghuo/shenghuo4.png'
import shenghuo5 from './assets/shenghuo/shenghuo5.png'
import shenghuo6 from './assets/shenghuo/shenghuo6.png'
import shenghuo7 from './assets/shenghuo/shenghuo7.png'
import shenghuo8 from './assets/shenghuo/shenghuo8.png'
import shenghuo9 from './assets/shenghuo/shenghuo9.png'
import shenghuo10 from './assets/shenghuo/shenghuo10.png'
import shenghuo11 from './assets/shenghuo/shenghuo11.png'
import shenghuo12 from './assets/shenghuo/shenghuo12.png'
import shenghuo13 from './assets/shenghuo/shenghuo13.png'
import shenghuo14 from './assets/shenghuo/shenghuo14.png'
import shenghuo15 from './assets/shenghuo/shenghuo15.png'
import shenghuo16 from './assets/shenghuo/shenghuo16.png'
import shenghuo17 from './assets/shenghuo/shenghuo17.png'
import shenghuo18 from './assets/shenghuo/shenghuo18.png'
import shenghuo19 from './assets/shenghuo/shenghuo19.png'
import shenghuo20 from './assets/shenghuo/shenghuo20.png'
import shenghuo21 from './assets/shenghuo/shenghuo21.png'
import shenghuo22 from './assets/shenghuo/shenghuo22.png'
import shenghuo23 from './assets/shenghuo/shenghuo23.png'
import shenghuo24 from './assets/shenghuo/shenghuo24.png'
import shenghuo25 from './assets/shenghuo/shenghuo25.png'
import shenghuo26 from './assets/shenghuo/shenghuo26.png'
import shenghuo27 from './assets/shenghuo/shenghuo27.png'
import shenghuo28 from './assets/shenghuo/shenghuo28.png'


interface FeatureProps {
  setIndice: () => void
}

const Feature: FC<FeatureProps> = () => {
  const { Title, Header } = component;
  const [chosenId, setChosenId] = useState(0);
  let images: { src: string, text: string }[] = [];
  switch (chosenId) {
    case 0:
      images = [{ src: huihua1, text: '表情包' }, { src: huihua2, text: '无数个小叶子' }, { src: huihua3, text: '桌面的花' }, { src: huihua4, text: '线条' }, { src: huihua5, text: '可可爱爱的小...' }, { src: huihua6, text: '失恋的那一刻' }, { src: huihua7, text: "test" }, { src: huihua8, text: "test" }, { src: huihua9, text: "test" }, { src: huihua10, text: "test" }, { src: huihua11, text: "test" }, { src: huihua12, text: "test" }, { src: huihua13, text: "test" }, { src: huihua14, text: "test" }, { src: huihua15, text: "test" }, { src: huihua16, text: "test" }, { src: huihua17, text: "test" }, { src: huihua18, text: "test" }, { src: huihua19, text: "test" }, { src: huihua20, text: "test" }, { src: huihua21, text: "test" }, { src: huihua22, text: "test" }, { src: huihua23, text: "test" }, { src: huihua24, text: "test" }, { src: huihua25, text: "test" }, { src: huihua26, text: "test" }, { src: huihua27, text: "test" }, { src: huihua28, text: "test" }, { src: huihua29, text: "test" }, { src: huihua30, text: "test" }, { src: huihua31, text: "test" }, { src: huihua32, text: "test" }, { src: huihua33, text: "test" }];
      break;
    case 1:
      images = [
        {src: yishu1, text: '音乐剧'},
        {src: yishu2, text: '话剧'},
        {src: yishu3, text: '演唱会'},
        {src: yishu4, text: '电影'},
        {src: yishu5, text: '音乐'},
        {src: yishu6, text: '绘画'},
        {src: yishu7, text: '舞蹈'},
        {src: yishu8, text: '视频'},
        {src: yishu9, text: '照片'},
        {src: yishu10, text: '服装'},
        {src: yishu11, text: '肢体'},
        {src: yishu12, text: '乐队'},
        {src: yishu13, text: '漫画'},
        {src: yishu14, text: '游戏'},
        {src: yishu15, text: '唱歌'},
        {src: yishu16, text: '建筑'},
        {src: yishu17, text: '古典乐'},
        {src: yishu18, text: '歌剧'},
        {src: yishu19, text: '艺术展'},
        {src: yishu20, text: '油画'},
        {src: yishu21, text: '雕塑'},
        {src: yishu22, text: '文学'},
        {src: yishu23, text: '摄影展'},
        {src: yishu24, text: '大鼓'},
        {src: yishu25, text: '魔术'},
        {src: yishu26, text: '插画'},
        {src: yishu27, text: '雕塑'},
        {src: yishu28, text: '书法'}
      ]
      break;
    case 2:
      images = [
        {src: shenghuo1, text:'旅行'},
        {src: shenghuo2, text:'作家'},
        {src: shenghuo3, text:'诗人'},
        {src: shenghuo4, text:'电影'},
        {src: shenghuo5, text:'音乐'},
        {src: shenghuo6, text:'绘画'},
        {src: shenghuo7, text:'舞蹈'},
        {src: shenghuo8, text:'视频'},
        {src: shenghuo9, text:'照片'},
        {src: shenghuo10, text:'服装'},
        {src: shenghuo11, text:'肢体'},
        {src: shenghuo12, text:'乐队'},
        {src: shenghuo13, text:'漫画'},
        {src: shenghuo14, text:'游戏'},
        {src: shenghuo15, text:'唱歌'},
        {src: shenghuo16, text:'建筑'},
        {src: shenghuo17, text:'古典乐'},
        {src: shenghuo18, text:'歌剧'},
        {src: shenghuo19, text:'艺术展'},
        {src: shenghuo20, text:'油画'},
        {src: shenghuo21, text:'雕塑'},
        {src: shenghuo22, text:'文学'},
        {src: shenghuo23, text:'摄影展'},
        {src: shenghuo24, text:'大鼓'},
        {src: shenghuo25, text:'魔术'},
        {src: shenghuo26, text:'插画'},
        {src: shenghuo27, text:'雕塑'},
        {src: shenghuo28, text:'书法'},
      ];
      break;
  }
  return (
    <Main>
      <TabBar chosenId={chosenId} setChosenId={setChosenId}></TabBar>
      <Contents images={images}></Contents>
    </Main>
  )
}

const Main = styled.div`
  position: relative;
  overflow-y: auto;
  /* ::-webkit-scrollbar: {
    display: none;
  } */
`

interface TabBarProps {
  chosenId: number,
  setChosenId: (n: number) => void
}
const TabBar: FC<TabBarProps> = ({ chosenId, setChosenId }) => {

  return (
    <TabBarLayout>
      <TabBarItem chosenId={chosenId} _id={0} onClick={() => { setChosenId(0) }}>绘画内容</TabBarItem>
      <TabBarItem chosenId={chosenId} _id={1} onClick={() => { setChosenId(1) }}>艺术活动</TabBarItem>
      <TabBarItem chosenId={chosenId} _id={2} onClick={() => { setChosenId(2) }}>生活方式</TabBarItem>
    </TabBarLayout>
  )
}
const TabBarLayout = styled.div`
  display: flex;
  border: 2px solid ${color.btnBackground};
  box-sizing: border-box;
  border-radius: 12px;
  margin-top: 5vh;
  margin-left: 10%;
  margin-right: 10%;  
  
`
const TabBarItem = styled.div<{ chosenId: number, _id: number, onClick: () => void }>`
  background: ${color.btnBackground};
  border-radius: 9px;
  border: 3px, solid, ${color.btnBackground};
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  user-select: none;
  color: ${({ chosenId, _id }) => { return chosenId === _id ? "white" : color.btnBackground }};
  background-color: ${({ chosenId, _id }) => { return chosenId === _id ? color.btnBackground : "white" }};
`

interface PicProps {
  images: ContentItemProps[]
}
interface ContentItemProps {
  src: string,
  text: string
}
const Contents: FC<PicProps> = (props: PicProps) => {
  return (
    <ContentsLayout>
      {props.images.map((item) => {
        return <ContentItem src={item.src} text={item.text}></ContentItem>
      })}
    </ContentsLayout>
  )
}
const ContentsLayout = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  margin-left: 12%;
  margin-right: 12%;
  margin-top: 2vh;

`
const ContentItem: FC<ContentItemProps> = (props: ContentItemProps) => {
  return (
    <ContentItemLayout>
      <ContentItemImg src={props.src}></ContentItemImg>
      <text>{props.text}</text>
    </ContentItemLayout>
  )
}

const ContentItemImg = styled.img`
  width: 80%;
  
`
const ContentItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px; 
  user-select: none;
  font-size: 10px;
`
export default Feature;