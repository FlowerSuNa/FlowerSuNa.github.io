---
title: "Boosting 이란"
permalink: /ml/ensembles/3/
comments: true
categories: [ML, Ensembles]
toc: true
---

**Reference**

- [1](https://blog.statsbot.co/ensemble-learning-d1dcd548e936)
- [2](https://steemit.com/kr-dev/@steemonen1/adaboost)
- [3](https://ko.wikipedia.org/wiki/%EC%97%90%EC%9D%B4%EB%8B%A4%EB%B6%80%EC%8A%A4%ED%8A%B8#cite_ref-1)
<br><br>

## 1. Boosting

- boosting은 weak learners를 조합하여 strong learners로 만들어 나가는 알고리즘이다.
  - weak learners : 상대적으로 성능이 떨어지는 learners
  - strong learners : 상대적으로 좋은 성능을 발휘하는 learners


## 2. AdaBoost

**Binary Classifier**

![fig.2](../images/ensembles_3_2.png)

- Input : $$ (x_1, y_1),\ \cdots\ ,(x_N, y_N) $$
  - $$ y_i \in \{-1, +1\} $$ <br>
  - $$ N $$ : sample 수
<br><br>

- 모든 데이터의 가중치 초기화
  - $$ i $$번째 데이터의 가중치 $$ w_i^{(1)} $$ 초기화
  - $$ w_i^{(1)} =
    \begin{cases}
    \frac{1}{M}, & \mbox{if }\ y_i=+1\mbox{(positive)} \\
    \frac{1}{L}, & \mbox{if }\ y_i=-1\mbox{(negative)}
    \end{cases} $$ <br>
  - $$ M $$ : positive sample의 수
  - $$ L $$ : negative sample의 수
<br><br>

- 학습(모델 생성) $$ \cdots(1) $$
  - $$ t $$번째 모델 $$ \hat{f_t}(x) $$
<br><br>

- 모델의 오류 계산 $$ \cdots(2) $$
  - $$ t $$번째 모델의 오류 $$ \boldsymbol{\varepsilon}_t $$ 계산
  - $$ \boldsymbol{\varepsilon}_t =
    \cfrac{\sum\limits_{\underset{\hat{f_t}(x_k)\ne y_k}{k=1}}^{N} w_k}
    {\sum\limits_{k=1}^{N} w_k} =
    \cfrac{\text{오류인 데이터의 가중치 합}}{\text{전체 학습 데이터의 가중치 합}} $$ <br>
<br><br>

- 모델의 가중치 계산 $$ \cdots(3) $$
  - $$ t $$번째 모델의 가중치 $$ \alpha_t $$ 계산
  - $$ \alpha_t = \cfrac{1}{2}
    \ln \cfrac{1-\boldsymbol{\varepsilon}_t}{\boldsymbol{\varepsilon}_t} $$ <br>
<br><br>

- 데이터의 가중치 계산 및 업데이트 $$ \cdots(4) $$
  - $$ i $$번째 데이터의 가중치 $$ w_i^{(t)} $$ 업데이트
  - $$ w_i^{(t+1)} \leftarrow
    \begin{cases}
    \cfrac{w_i^{(t)} e^{-\alpha_t}}{W}, & \mbox{if }\ \hat{f_t}(x_k)=y_k\ (\text{예측이 맞은 경우}) \\
    \cfrac{w_i^{(t)} e^{\alpha_t}}{W}, & \mbox{if }\ \hat{f_t}(x_k)\ne y_k\ (\text{예측이 틀린 경우})
    \end{cases} $$ <br>
  - $$ W = \sum\limits_{k=1}^{N} w_k^{(t)} $$ <br>
<br><br>

- $$ (1)-(4) $$ 과정 $$ T $$번 반복
<br><br>

- Output : $$ G(x) =
  \begin{cases}
  1, & \mbox{if }\ \sum\limits_{t=1}^{T} \alpha_t \hat{f_t}(x) \ge \sum\limits_{t=1}^{T} \alpha_t\\
  0, & \mbox{if }\ otherwise
  \end{cases} $$
<br><br>

## 3. Gradient Boosting (GBM)

## 4. XGBoost

## 5. LightGBM
