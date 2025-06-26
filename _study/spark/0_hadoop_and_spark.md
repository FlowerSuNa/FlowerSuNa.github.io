---
title: "하둡(Hadoop)과 스파크(Spark)"
permalink: /study/spark/0/
comments: true
categories: [Spark]
toc: true
---

**Reference**
- [1](https://ko.wikipedia.org/wiki/%EC%95%84%ED%8C%8C%EC%B9%98_%ED%95%98%EB%91%A1)
- [2](https://futurecreator.github.io/2018/08/14/apache-spark-basic/)
- [3](https://m.blog.naver.com/PostView.nhn?blogId=acornedu&logNo=220957220179&proxyReferer=https%3A%2F%2Fwww.google.com%2F)
- [4](http://www.incodom.kr/hadoop_%EC%B4%9D%EC%A0%95%EB%A6%AC)
- [5](http://toppertips.com/hadoop-3-0-architecture/)
- [6](https://yookeun.github.io/java/2015/05/24/hadoop-hdfs/)
<br><br>


## 1. 하둡(Hadoop)

- High-Availability Distributed Object-Oriented Platform

![fig.1](../images/spark_0_1.png)

- 많은 컴퓨터의 네트워크를 사용하여 대량의 데이터와 컴퓨팅과 관련된 문제를 쉽게 해결할 수 있는 오픈 소스 소프트웨어이다.
  - **HDFS**(Hadoop Distributed File System)와 **MapReduce**로 구성된다.
  - HDFS는 일반 시스템에 데이터를 저장하여 클러스터 전체에서 매우 높은 집계 대역-
  - MapReduce 프로그래밍 모델을 사용하여 빅데이터의 분산 저장 및 처리를 위한 소프트 프레임워크를 제공한다.

- 간단한 프로그래밍 모델을 사용하여 여러대의 컴퓨터 클러스터에서 대규모 데이터 세트를 분산 처리할 수 있게 해주는 프레임워크이다.
  - 단일 서버에서 수천대의 머신으로 확장할 수 있도록 설계되었다.
