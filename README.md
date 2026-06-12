# 🌀 슝슝이 미로게임

## 📖 프로젝트 소개
  <div>
    <img src="https://github.com/user-attachments/assets/460e6a0b-9a10-45b2-b322-f2f095078b9d" width="30%"/>
    <img src="https://github.com/user-attachments/assets/6c33fc51-198b-43a4-acac-2679386ba2e0" width="30%"/>
    <img src="https://github.com/user-attachments/assets/f145e07b-a513-457c-ad72-45833176ad2a" width="30%"/>
  </div>
  
  <br />

- 2023 숭실대학교 대동제 UMC 동아리 부스 운영을 위해 제작한 모바일 웹 게임입니다.
- 클리어 시 탕후루를 할인해주는 마케팅 수단으로 사용되어 약 300명이 체험하였습니다.
- 한 명의 디자이너와 협업하였습니다.
- Next.js와 MongoDB를 사용하여 랭킹 시스템까지 풀스택으로 개발하였습니다.
- vercel을 통해 배포하였습니다. https://ssumc-maze.vercel.app/

<br>

## 🕹️ 게임 방법

1. **시작 화면**에서 START 버튼을 클릭해 게임을 시작합니다.
2. **플레이 화면**에서 행동 카드(↑ ↓ ← →)를 클릭해 이동 명령어를 스택에 추가합니다.
   - 🍊 귤 = 위(U)
   - 🍇 포도 = 아래(D)
   - 🍈 청포도 = 왼쪽(L)
   - 🍓 딸기 = 오른쪽(R)
3. RESET 버튼으로 스택을 초기화하거나, RUN 버튼으로 명령어를 순서대로 실행합니다.
4. 목적지에 도달하면 성공, 벽에 부딪히거나 명령어가 소진되면 실패입니다.
5. 성공 시 닉네임을 입력하고 랭킹에 기록을 등록합니다.

<br>

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 랜덤 미로 | 게임 시작 시 3가지 미로 중 하나가 무작위로 선택됩니다 |
| 스택 기반 이동 | 명령어를 스택에 쌓아두고 RUN으로 일괄 실행합니다 |
| 타이머 | 게임 시작부터 클리어까지 경과 시간을 측정합니다 |
| 글로벌 랭킹 | 클리어 기록을 저장하고 상위 플레이어를 확인할 수 있습니다 |
| BGM & 효과음 | 배경 음악과 버튼 클릭 효과음을 지원합니다 |
| 애니메이션 | Framer Motion 기반의 화면 전환 애니메이션을 적용했습니다 |

<br>

## 🛠️ 기술 스택

### Frontend
![Next.js](https://img.shields.io/badge/Next.js_13-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)

### DB
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)

### Deploy
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

<br>

## 📁 프로젝트 구조

```
SSUMC_MAZE/
├── app/
│   ├── api/
│   │   └── rank/          # 랭킹 API (GET/POST)
│   ├── components/
│   │   ├── ControlBox.tsx  # 방향 입력 & 스택 시각화
│   │   ├── Maze.tsx        # 미로 렌더링
│   │   ├── Success.tsx     # 성공 화면
│   │   ├── Fail.tsx        # 실패 화면
│   │   ├── StartWrapper.tsx
│   │   └── PageWrapper.tsx
│   ├── play/              # 게임 플레이 페이지
│   ├── rank/              # 랭킹 페이지
│   ├── register/          # 닉네임 등록 페이지
│   ├── redux/
│   │   ├── controlSlice.ts # 게임 상태 (미로, 플레이어 위치, 타이머)
│   │   ├── stackSlice.ts   # 명령어 스택 상태
│   │   ├── store.ts
│   │   └── provider.tsx
│   ├── constants.ts       # 이동 방향 enum, 목적지 좌표
│   └── page.tsx           # 시작 화면
├── util/
│   └── database.ts        # MongoDB 연결
├── public/
│   ├── assets/            # SVG 이미지, 캐릭터
│   └── audio/             # BGM, 효과음
└── type/
```

<br>


## 👤 개발자

| 이름 | GitHub |
|------|--------|
| 이선호 | [@Lee-Sunho](https://github.com/Lee-Sunho) |
