---
title: "도커 이미지와 도커 컨테이너"
permalink: /study/docker/1/
comments: true
categories: []
toc: true
---

**Reference**

- 도커/쿠버네티스를 활용한 컨테이너 개발 실전 입문
  - 야마다 아키노리 지음
  - 심효섭 옮김
<br><br>

---

# 1. Docker Image

- 도커 이미지(Docker Image)는 도커 컨테이너를 만들기 위한 **템플릿**

- 우분투 같은 운영 체제로 구성된 파일 시스템은 물론, 컨테이너 위에서 실행하기 위한 애플리케이션이나 그 의존 라이브러리, 도구에 어떤 프로세스를 실행할지 등의 실행 환경의 설정 정보까지 포함하는 아카이브

- `Dockerfile`은 이미지를 구성하는 순서를 기술한 코드이므로 `Dockerfile` 자체가 이미지라고 할 수 없음

- 컨테이너의 템플릿 역할을 하는 이미지를 만드는 과정을 **도커 이미지를 빌드한다**고 함
<br><br>


**1) `docker image build`**

- `Dockerfile`에 기술된 구성을 따라 도커 이미지를 생성하는 명령어

docker image build -t 이미지명[:태그명] Dockerfile_경로
{: .notice--info}

- `Dockerfile`이 현재 작업 디렉터리에 있다면 `.`을 입력함

  ```
  $ docker image build -t example/echo:latest .
  ```

- `-f` 옵션
  - [`Dockerfile`] 이외의 파일명으로 된 `Dockerfile`을 사용하려면 이 옵션 사용

    ```
    $ docker image build -f Dockerfile-test -t example/echo:latest .
    ```

- `--pull` 옵션
  - `true`로 설정하면 매번 베이스 이미지를 강제로 새로 받아옴
  - 이미지를 빌드할 때 확실하게 최신 베이스 이미지를 사용하고 싶을 때 사용 <br>
    (도커는 `Dockerfile`에 변경된 부분만을 반영해 빌드하려 함)

    ```
    $ docker image build --pull=true -t example/echo:latest .
    ```


**2) `docker search`**

- 도커 허브에 등록된 리포지토리 탐색

docker search [options] 검색_키워드
{: .notice--info}

```
$ docker search --limit 5 mysql
```


**3) `docker image pull`**

- 도커 레지스트리에서 도커 이미지를 내려받을 때 사용하는 명령어
  - 내려받은 이미지는 그대로 도커 컨테이너를 생성하는데 사용할 수 있음

docker image pull [options] 리포지토리명[:태그명]
{: .notice--info}

```
$ docker image pull jenkins:latest
```


**4) `docker image ls`**

- 현재 호스트 운영 체제에 저장된 도커 이미지의 목록을 보여주는 명령어
  - 여기서 말하는 호스트 운영 체제는 도커 데몬이 동작하는 호스트 환경을 말함
  - `docker image pull` 명령으로 원격 도커 레지스트리에서 내려받은 이미지는 물론이고 `docker image build` 명령을 실행하여 내려받은 이미지도 호스트 운영 체제에 저장됨
- [IMAGE ID]는 이미지에 대한 식별자이고, 컨테이너를 구분하기 위한 [CONTAINER ID]와는 별개
  - 즉, 이미지와 컨테이너는 별도로 관리

docker image ls [options] 리포지토리[:태그]
{: .notice--info}

```
$ docker image ls
```


**5) `docker image tag`**

- 도커 이미지의 특정 버전에 태그를 붙일 때 사용하는 명령어
  - 도커에서 태그 하나에 연결될 수 있는 이미지는 하나뿐임(이전 태그명과 같으면, 이전 태그명은 <none>으로 바뀜)

- 애플리케이션을 수정하고 이미지를 빌드하면 매번 다른 이미지가 됨
  - 즉, 원래 같은 이미지였지만 수정 후에는 다른 [IMAGE ID] 값이 할당됨
    - `Dockerfile`을 편집할 때뿐만 아니라 `COPY` 대상이 되는 파일의 내용이 바뀌어도 [IMAGE ID] 값이 바뀜
  - 태그를 지정하지 않고 빌드한 이미지는 기본적으로 latest 태그 부여

**태그**
도커 이미지에 붙은 태그는 이미지의 특정 버전을 구별하기 위한 것이다. 즉, 태그는 특정한 이미지를 쉽게 참조할 수 있도록 붙인 별명이다. 도커
{: .notice--success}

docker image tag [options] 기반이미지명[:태그] 새이미지명[:태그]
{: .notice--info}

```
$ docker image tag example/echo:latest example/echo:0.1.0
```


**6) `docker image push`**

- 현재 저장된 도커 이미지를 도커 허브 등의 레지스트리에 등록하기 위해 사용하는 명령어
- 도커 허브는 자신 혹은 소속 기관이 소유한 리포지토리에만 이미지를 등록할 수 있음
  - 도커 허브에 올리기전, 네임스페이스를 도커 허브 ID로 변경해야 함
- 공개 리포지토리는 누구나 `docker image pull` 명령으로 이미지를 내려받을 수 있음
  - 따라서 공개 리포지토리에 등록할 이미지나 `Dockerfile`에는 패스워드나 API 키 값 같은 민감한 정보가 포함되지 않도록 주의해야 함

docker image push [options] 리포지토리명[:태그]
{: .notice--info}

```
$ docker image tag example/echo:latest stormcattest/echo:latest
$ docker image push stormcattest/echo:latest
```


<br><br>

---

# 2. Docker Container

- 도커 컨테이너는 이미지를 바탕으로 만들어짐

- 파일 시스템과 애플리케이션이 함께 담겨 있는 박스 (가상환경)


**도커 컨테이너 생애주기**

1) 실행 중 상태
- `docker container run` 명령의 인자로 지정된 도커 이미지를 기반으로 컨테이너가 생성되면 이 이미지를 생성했던 `Dockerfile`에 포함된 `CMD` 및 `ENTRYPOINT` 인스트럭션에 정의된 애플리케이션이 실행
  - 이 애플리케이션이 실행 중인 상태가 컨테이너의 실행 중 상태

2) 정지 상태

- 실행 중 상태에 있는 컨테이너를 사용자가 명시적으로 정지하거나 컨테이너에서 실행된 애플리케이션이 정상/오류 여부를 막론하고 종료된 경우, 컨테이너가 자동으로 정지 상태됨
  - 컨테이너를 정지시키면 가상 환경으로서는 더 이상 동작하지 않지만, 디스크에 컨테이너가 종료되던 시점의 상태가 저장됨
  - 따라서 정지시킨 컨테이너는 다시 실행 가능

3) 파기 상태
