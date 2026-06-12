# 🌀 SSUMC MAZE

> 스택(Stack) 자료구조를 활용한 미로 탈출 퍼즐 게임

<br>

## 📖 프로젝트 소개

**SSUMC MAZE**는 숭실대학교 UMC(University MakeUs Challenge)에서 진행한 웹 게임 프로젝트입니다.  
플레이어는 이동 명령어를 스택에 쌓은 뒤 한 번에 실행하여 미로를 탈출해야 합니다.  
명령어를 잘못 쌓으면 벽에 부딪혀 실패하고, 목적지에 도달하면 기록을 랭킹에 등록할 수 있습니다.

<br>

## 🕹️ 게임 방법

1. **시작 화면**에서 START 버튼을 클릭해 게임을 시작합니다.
2. **플레이 화면**에서 하단 방향 카드(↑ ↓ ← →)를 클릭해 이동 명령어를 스택에 추가합니다.
   - 🍊 귤 = **위(U)**
   - 🍇 보라포도 = **아래(D)**
   - 🍈 초록포도 = **왼쪽(L)**
   - 🍓 딸기 = **오른쪽(R)**
3. **RESET** 버튼으로 스택을 초기화하거나, **RUN** 버튼으로 명령어를 순서대로 실행합니다.
4. 목적지(FINISH)에 도달하면 **성공**, 벽에 부딪히거나 명령어가 소진되면 **실패**입니다.
5. 성공 시 닉네임을 입력하고 **랭킹**에 기록을 등록합니다.

<br>

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 랜덤 미로 | 게임 시작 시 3가지 미로 중 하나가 무작위로 선택됩니다 |
| 스택 기반 이동 | 명령어를 스택에 쌓아두고 RUN으로 일괄 실행합니다 |
| 타이머 | 게임 시작부터 클리어까지 경과 시간을 측정합니다 |
| 글로벌 랭킹 | MongoDB에 기록을 저장하고 상위 플레이어를 확인할 수 있습니다 |
| BGM & 효과음 | 배경 음악과 버튼 클릭 효과음을 지원합니다 |
| 애니메이션 | Framer Motion 기반의 화면 전환 애니메이션을 적용했습니다 |

<br>

## 🛠️ 기술 스택

### Frontend
![Next.js](https://img.shields.io/badge/Next.js_13-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React_18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)

### Backend & DB
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)

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

## 🚀 시작하기

### 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 MongoDB 연결 URI를 입력합니다.

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
```

### 설치 및 실행

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

<br>

## 🗺️ 페이지 구성

| 경로 | 설명 |
|------|------|
| `/` | 시작 화면 |
| `/play` | 게임 플레이 화면 |
| `/register` | 클리어 후 닉네임 등록 |
| `/rank` | 글로벌 랭킹 보드 |

<br>

## 👤 개발자

| 이름 | GitHub |
|------|--------|
| 이선호 | [@Lee-Sunho](https://github.com/Lee-Sunho) |
