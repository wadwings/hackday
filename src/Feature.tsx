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
interface FeatureProps {
  setIndice: () => void
}

const Feature: FC<FeatureProps> = () => {
  const { Title, Header } = component;
  const [chosenId, setChosenId] = useState(0);
  let images: {src:string, text:string}[] = [];
  switch (chosenId) {
    case 0:
      images = [{src:huihua1,text: '表情包'},{src:huihua2,text: '无数个小叶子'},{src:huihua3,text: '桌面的花'},{src:huihua4,text: '线条'},{src:huihua5,text: '可可爱爱的小...'},{src:huihua6,text: '失恋的那一刻'},{src:huihua7,text: "test"},{src:huihua8,text: "test"},{src:huihua9,text: "test"},{src:huihua10,text: "test"},{src:huihua11,text: "test"},{src:huihua12,text: "test"},{src:huihua13,text: "test"},{src:huihua14,text: "test"},{src:huihua15,text: "test"},{src:huihua16,text: "test"},{src:huihua17,text: "test"},{src:huihua18,text: "test"},{src:huihua19,text: "test"},{src:huihua20,text: "test"},{src:huihua21,text: "test"},{src:huihua22,text: "test"},{src:huihua23,text: "test"},{src:huihua24,text: "test"},{src:huihua25,text: "test"},{src:huihua26,text: "test"},{src:huihua27,text: "test"},{src:huihua28,text: "test"},{src:huihua29,text: "test"},{src:huihua30,text: "test"},{src:huihua31,text: "test"},{src:huihua32,text: "test"},{src:huihua33,text: "test"}];
      break;
      case 1:
      images = [{src: Pic00000, text: "bad"},{src: Pic00000, text: "good"},{src: Pic00000, text: "good"},{src: Pic00000, text: "good"}  ];
      break;
    case 2:
      images = [];
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
  ::-webkit-scrollbar: {
    display: none;
  }
`

interface TabBarProps {
  chosenId: number,
  setChosenId: (n : number) => void
}
const TabBar: FC<TabBarProps> = ({chosenId, setChosenId}) => {
  
  return (
    <TabBarLayout>
      <TabBarItem chosenId={chosenId} _id={0} onClick={()=>{setChosenId(0)}}>绘画内容</TabBarItem>
      <TabBarItem chosenId={chosenId} _id={1} onClick={()=>{setChosenId(1)}}>艺术活动</TabBarItem>
      <TabBarItem chosenId={chosenId} _id={2} onClick={()=>{setChosenId(2)}}>生活方式</TabBarItem>
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
const TabBarItem = styled.div<{chosenId: number, _id: number, onClick: ()=>void}>`
  background: ${color.btnBackground};
  border-radius: 9px;
  border: 3px, solid, ${color.btnBackground};
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  user-select: none;
  color: ${({chosenId, _id}) => {return chosenId===_id? "white": color.btnBackground}};
  background-color: ${({chosenId, _id}) => {return chosenId===_id? color.btnBackground: "white"}};
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
      {props.images.map((item)=> {
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
const ContentItem : FC<ContentItemProps> = (props:ContentItemProps) => {
  return(
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