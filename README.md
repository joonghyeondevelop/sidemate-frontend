# Sidemate Web

Sidemate는 **사이드 프로젝트 팀원을 모집하고, 지원 / 승인 / 역할 / 진행 상태를 관리하는 플랫폼**입니다.

이 저장소는 **Sidemate의 프론트엔드 애플리케이션**입니다.

---

# Demo

추후 배포 후 링크 추가 예정

---

# Tech Stack

### Core

- React
- TypeScript
- Vite

### Styling

- Tailwind CSS
- shadcn/ui

### Routing

- React Router

### Server State

- TanStack Query

### Form

- React Hook Form
- Zod

### HTTP Client

- Axios

---

# Frontend Architecture

이 프로젝트는 **Feature 기반 구조**로 구성했습니다.

pages → features → shared

### pages

라우팅 단위로 구성된 화면입니다.  
여기서는 주로 **UI를 조합하는 역할**을 합니다.

### features

도메인 기능 단위입니다.

예)

- auth
- projects
- positions
- applications
- members

각 feature 안에서

- API
- hooks
- components
- types

같이 기능을 관리합니다.

### shared

여러 곳에서 공통으로 사용하는 코드입니다.

예)

- 공용 UI 컴포넌트
- axios 설정
- util 함수
- 타입

---

# Key Features

현재 구현 예정 기능입니다.

- 프로젝트 목록 조회
- 프로젝트 상세 페이지
- 모집 포지션 확인
- 프로젝트 지원
- 프로젝트 관리 페이지

---

# Project Structure

src
├ app
├ pages
├ features
├ shared
└ assets

---

# State Management

상태는 다음 기준으로 나눠서 관리합니다.

### Server State

- TanStack Query

### Form State

- React Hook Form

### Validation

- Zod

---

# Running Locally

```bash
npm install
npm run dev
```

기본 실행 주소
http://localhost:5173

Future Improvements

추후 추가 예정 기능

프로젝트 검색 및 필터

알림 기능

실시간 업데이트
