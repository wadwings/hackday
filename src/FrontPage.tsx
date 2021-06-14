import React, { useState, useEffect, MouseEventHandler } from 'react';
import type { ReactNode, FC, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { color } from './Common';
import rightArrowPng from './assets/rightArrow.png';
import leftArrowPng from './assets/leftArrow.png';

interface RateCardItemProps {
  text: string,
  rate: number,
}
interface RateCardItems {
  items: RateCardItemProps[]
}
const RateCard: FC<RateCardItems> = (props: RateCardItems) => {
  return (
    <RateCardLayout>
      {props.items.map((item) => {
        return <RateCardItem text={item.text} rate={item.rate}></RateCardItem>
      })}
    </RateCardLayout>
  )
}
const RateCardLayout = styled.div`
  width: 45vw;
  padding-left: 5%;
  padding-top: 50px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  margin-left: 14vw;
  background-color: ${color.rateCard};
  border-radius: 24px;
  position: relative;
`

const RateCardItem: FC<RateCardItemProps> = (props) => {

  return (
    <RateCardItemLayout>
      <RateCardItemText><RateCardItemDot></RateCardItemDot>{props.text}</RateCardItemText>
      <RateBar rate={props.rate}></RateBar>
    </RateCardItemLayout>
  )
}
const RateCardItemLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 35px;
`
const RateCardItemText = styled.div`
  position: relative;
  font-size: 2vmin;
`
const RateCardItemDot = styled.div`
  position: absolute;

  top: 50%;
  transform: translateY(-100%);
  left: -20px;
  margin-right: 10px;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${color.dot};
`

interface RateBarProps {
  rate: number,
}
const RateBar: FC<RateBarProps> = (props) => {
  const rate: number = parseFloat(props.rate.toFixed(4));
  const width = 253;
  console.log(rate);
  return (
    <RateBarLayout rate={props.rate}>
      <RateBarFill width={width * rate}><RateText>{(rate * 100).toFixed(2)}</RateText></RateBarFill>
    </RateBarLayout>
  )
}
const RateText = styled.div`
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 12px;
`
const RateBarLayout = styled.div<RateBarProps>`
  width: 253px;
  height: 37px;
  border-radius: 12px;
  border: 1px solid ${color.btnBackground};
  box-sizing: border-box;
  margin-left: 5vw;
`
const RateBarFill = styled.div<{ width: number }>`
  position: absolute;
  left: -1px;
  top: -1px;
  bottom: 0;
  border-radius: 12px;
  height: 100%;
  border: 1px solid ${color.btnBackground};
  background-color: ${color.btnBackground};
  width: ${({ width }) => width + "px"};
  position: relative;
  color: white;
`

interface AnalysisCardProps {
  text: string,
}
const AnalysisCard: FC<AnalysisCardProps> = (props: AnalysisCardProps) => {
  const text = props.text;
  return (
    <AnalysisCardLayout>
      <AnalysisCardBlock>
        {text}
      </AnalysisCardBlock>
    </AnalysisCardLayout>
  )
}
const AnalysisCardLayout = styled.div`
  /* margin-left: 63vw; */

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-bottom: 80px;

`;

const AnalysisCardBlock = styled.div`
  margin-right: 15vw;
  color: white;
  font-size: 2vmin; 
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 40px;
  padding-left: 40px;

  background-color: ${color.analysisCard};
  border-radius: 24px;
`

const GoinButton: FC = () => {

  const onTapGoin = () => {
    
  }
  return (
    <GoinButtonLayout onClick={onTapGoin}>
      进入
    </GoinButtonLayout>
  )
}
const GoinButtonLayout = styled.button`
  outline: none;
  border: none;
  margin: 0 auto;
  margin-top: 50px;
  width: 288px;
  height: 82px;
  background-color: ${color.btnBackground};
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  color: white;
  border-radius: 24px;
`

const CarouselDiv = styled.div`
  position: relative;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
`
interface SwipperProps {
  curIndex: number
}
const Swipper: FC<SwipperProps> = (props: SwipperProps) => {
  return (
    <SwipperLayout curIndex={props.curIndex}>
      <CarouselDiv>
        <RateCard items={[{ text: "有计划在大学中培养一些艺术爱好吗", rate: 0.8893 }, { text: "现在有艺术方面的爱好或者特长吗", rate: 0.6886 }, { text: "有计划但现在没有艺术方面的爱好或者特长", rate: 0.2846 }]}></RateCard>
        <AnalysisCard text={"依旧1/4的人没有迈出第一步"}></AnalysisCard>
      </CarouselDiv>
      <CarouselDiv>
        <RateCard items={[{ text: "拿到并一种乐器来探索会不知所措吗", rate: 0.4291 }]}></RateCard>
        <AnalysisCard text={"探索欲降低和发自童心的冲动变小"}></AnalysisCard>
      </CarouselDiv>
      <CarouselDiv>
        <RateCard items={[{ text: "拿到一张白纸有没有画画的想法", rate: 0.5882 }, { text: "是否幻想自己过艺术家的生活方式", rate: 0.4394 }]}></RateCard>
        <AnalysisCard text={"固化生活中依旧有人保持美好向往"}></AnalysisCard>
      </CarouselDiv>
      <CarouselDiv>
        <RateCard items={[{ text: "是否愿意探索艺术活动", rate: 0.7232 }, { text: "渴望抽时间参与艺术活动吗", rate: 0.7958 }]}></RateCard>
        <AnalysisCard text={"大多数人仍然对艺术生活有着热爱"}></AnalysisCard>
      </CarouselDiv>
    </SwipperLayout>
  )
}
const SwipperLayout = styled.div<{ curIndex: number }>`
  margin-top: 10%;
  width: 400vw;
  display: flex;
  flex-wrap: nowrap;
  background-color: #E5E5E5;
  transform: translateX(${({curIndex})=>-100*curIndex+"vw"});
  transition: 1.5s;
`

interface ClickableProps {
  click: (e: MouseEvent<HTMLDivElement>) => void,
  curIndex: number
}
const RightArrow: FC<ClickableProps> = (props: ClickableProps) => {
  if (props.curIndex === 3) {
    return null;
  }
  return (
    <div onClick={props.click}>
      <RightArrowImage src={rightArrowPng}></RightArrowImage>
    </div>
  )
}
const LeftArrow: FC<ClickableProps> = (props: ClickableProps) => {
  if (props.curIndex === 0) {
    return null;
  }
  return (
    <div onClick={props.click}>
      <LeftArrowImage src={leftArrowPng}></LeftArrowImage>
    </div>
  )
}
const RightArrowImage = styled.img`
  position: fixed;
  top:50%;
  transform: translateY(-50%);
  right: 50px;
  z-index: 5;
  width: 100px;
`
const LeftArrowImage = styled.img`
  position: fixed;
  top:50%;
  transform: translateY(-50%);
  left: 50px;
  z-index: 5;
  width: 100px;
`

const FrontPage: FC = () => {

  const [curIndex, setCurIndex] = useState(0);
  const onTapRightArrow = (e: MouseEvent<HTMLDivElement>) => {
    if (curIndex >= 3) {
      return;
    };
    setCurIndex(curIndex+1);
  }
  const onTapLeftArrow = (e: MouseEvent<HTMLDivElement>) => {
    if (curIndex <= 0) {
      return;
    };
    setCurIndex(curIndex-1);
  }
  return (
    <Main>
      <RightArrow click={onTapRightArrow} curIndex={curIndex}></RightArrow>
      <LeftArrow click={onTapLeftArrow} curIndex={curIndex}></LeftArrow>
      <Swipper curIndex={curIndex}></Swipper>
      <GoinButton/>
    </Main>
  )
}

const Main = styled.div`
  background-color: #E5E5E5;
  min-height: 100vh;
  z-index: 1;
  position: relative; 
  /* padding-top: 120px; */
  overflow-x: hidden;
  overflow-y: hidden;
`

export default FrontPage;