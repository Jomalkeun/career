# Career Portfolio

프로젝트 단위의 경력과 기술 경험을 한눈에 살펴볼 수 있도록 만든 개인 경력관리 포트폴리오입니다.

경력 데이터를 단순히 나열하는 대신 검색과 필터, 다양한 보기 방식을 제공해 프로젝트 기간, 담당 역할, 고객사, 기술 스택과 주요 업무를 빠르게 확인할 수 있도록 구성했습니다.

## 주요 기능

- 프로젝트명, 고객사, 기술 키워드 통합 검색
- 연도, 역할, 수행 단계, 기술 스택별 필터링
- 테이블, 카드, 경력 타임라인 형태의 보기 전환
- 프로젝트 기간과 기술 스택을 기준으로 한 정렬 및 탐색
- 프로젝트별 상세 정보와 주요 기여 내용 확인
- 라이트/다크 테마 전환
- 전체 경력 내용을 Word 문서로 내보내기
- 데스크톱과 모바일 환경을 고려한 반응형 UI

## 기술 스택

- React 19
- TypeScript
- Vite
- Tailwind CSS
- TanStack Table
- Font Awesome / Lucide React

## 시작하기

### 요구 사항

- Node.js
- npm

### 설치 및 실행

```bash
npm install
npm run dev
```

개발 서버가 시작되면 터미널에 표시된 로컬 주소로 접속합니다.

## 사용 가능한 명령어

```bash
npm run dev      # 개발 서버 실행
npm run build    # 타입 검사 및 프로덕션 빌드
npm run lint     # ESLint 검사
npm run preview  # 프로덕션 빌드 미리보기
```

## 프로젝트 구조

```text
src/
├── components/       # 화면과 경력 상세 UI 컴포넌트
├── data/             # 프로젝트별 경력 데이터
├── hooks/            # 테이블 컬럼 등 공통 로직
├── types/            # TypeScript 타입 정의
├── utils/            # 경력 데이터 가공 유틸리티
└── App.tsx            # 검색, 필터, 정렬, 보기 상태 구성
```

경력 정보는 `src/data/careerData.tsx`에서 관리하며, 각 항목에는 프로젝트명, 기간, 고객사, 소속, 역할, 기술 스택, 주요 업무 등의 정보가 포함됩니다.

## 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 디렉터리에 생성됩니다. 이 프로젝트는 `/career/` 경로를 기준으로 배포되도록 설정되어 있습니다.
