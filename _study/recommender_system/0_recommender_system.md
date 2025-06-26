---
title: "추천 시스템 이란"
permalink: /study/recommender_system/0/
comments: true
categories: [RecommenderSystem]
toc: true
---

**Reference**

- https://en.wikipedia.org/wiki/Recommender_system
- https://yamalab.tistory.com/67
- https://yamalab.tistory.com/68?category=747907
- https://en.wikipedia.org/wiki/Collaborative_filtering
<br><br>

## 1. 추천 시스템(Recommender System)

- 추천 시스템 이란?
  - **특정 시점**에 **특정 User**가 관심 가질 만한 정보(영화, 음악, 책, 뉴스 등)를 추천하는 것
  - Personalized Recommender (개인화 추천) : User의 정보를 기반으로 Item 리스트를 추천하는 방법
  - Non-personalized Recommender : Rating 기반의 인기 Item이나 현재 Item 기준 AR(Association Rule)순위 Item을 추천하는 방법
  - Attribute-based(Contents-based) Recommender : Item 자체가 가지고 있는 정보(Contents)를 활용하여 추천하는 방법
<br><br>

- 추천 시스템은 대부분 B2C 비즈니스 환경에 적용한다.
  - User와 Item을 고려해야 한다.
  - 시스템의 업데이트를 고려해야 한다.
    - 추천되는 Item의 리스트가 얼마나 자주 업데이트 되는지 중요
    - 추천되는 영역마다 Item 리스트의 업데이트 주기는 매우 중요
  - 추천 시스템의 알고리즘 성능을 고려해야 한다.
    - 좁은 의미에서는 추천 모델의 계산량이나 연산 속도를 의미
    - 넓은 의미에서는 빅데이터를 처리할 수 있는 좋은 환경을 의미 <br>
      (대부분의 추천 시스템은 대량의 정보를 이용하기 때문)
<br><br>

## 2. 추천 시스템 알고리즘

![fig.2](../images/recommender_system_0_1.png)

- Collaborative Filtering(CF)
  - User 또는 Item 간의 유사도(Similarity)를 측정하여 User에게 Item을 추천하는 방법
- Contents-based Filtering
  - Item 자체가 가지고 있는 정보(Contents)와 User의 선호에 대해 분석하여 User에게 Item을 추천하는 방법
- Hybrid Recommender System
  - Collaborative Filtering과 Content-based Filtering을 결합하여 User에게 Item을 추천하는 방법
<br><br>

## 3. 추천 시스템에서 주로 발생하는 문제점

- Cold Start Problem
  - User에게 Item을 추천하기 위해 많은 양의 기존 데이터가 요구된다.
  - 새로운 User에게 어떤 Item을 추천해 주어야 할지 고민해야 한다.
<br><br>

- Sparsity Problem
  - 추천할 Item과 User는 계속해서 증가한다.
  - 하지만, User가 실제로 소비하게 되는 Item의 비율은 현저하게 감소된다.
<br><br>

- Information Utilization Problem
  - 추천 시스템 구축에 활용하기 위한 데이터 및 정보를 올바르게 활용하기 위해 고민해야 한다.
  - 대부분의 User는 Item을 눌러보고 다른 Item도 살펴본 뒤, 마음에 들면 장바구니에 넣고 구매하기도 하고 하지 않기도 한다(Implicit Score).
  - 구매가 완료되었지만, 이후 환불이나 교환이 일어날 수 있다(구매를 하였다고 Item에 대한 호감을 나타내는 것은 아니다).
  - 데이터를 올바르게 활용하기 위해 Explicit Score(영화 평점에 대한 rating 같은 점수)처럼 데이터를 Utilization하는 과정이 필요하다.
  - Explicit Score가 항상 좋은 데이터는 아니다. -> Sparsity Problem을 겪는다.
