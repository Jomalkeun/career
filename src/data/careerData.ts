import type { Career } from "../types";

export const careerData: Career[] = [
  {
    id: "1",
    projectName: "E-Commerce Dashboard Redesign",
    projectType: "Admin Panel",
    icon: "dashboard",
    duration: "2023.10-24.02",
    durationInMonths: "5",
    client: "FinTech Corp",
    company: "Agency A",
    role: "Frontend Lead",
    roleType: "lead",
    osEnv: "Web / Windows",
    techStack: ["React", "TS"],
  },
  {
    id: "2",
    projectName: "Healthcare App Integration",
    projectType: "Patient Intake",
    icon: "monitor_heart",
    duration: "2023.01-09",
    durationInMonths: "9",
    client: "HealthPlus",
    company: "Agency A",
    role: "Senior UI Dev",
    roleType: "member",
    osEnv: "Hybrid / iOS",
    techStack: ["Vue.js", "Ionic"],
  },
  // Add more mock data if needed to fill the table
];


/*
업무명(프로젝트명)
참여기간(년,월)
고객사(발주사)
근무회사
본인역할
OS
사용언어  
{
AIDE 차량관제 시스템 
2025.12 ~ 2026. 01
비즈마인
비즈마인
PA
대시보드 및 차트 디자인 퍼블리싱
Vue.js
Vue.js
}, 



{
유플러스 운영 및 개발 고도화
2024.10~2025.12
㈜유플러스
파이언넷
PA
사이트 운영 및 부분 UIUX 고도화
Vue.js
Vue.js, Git,
피그마, Sass
}, 



{코오롱 몰 리뉴얼
2024.3~2024.9
㈜코오롱
퍼플아이오
PA
쇼핑몰 리뉴얼, Panda CSS 활용 React 퍼블리싱
React.js
Panda.css, Git
}, 



{디지털인증확산센터
2023.12~2024.01
한국인터넷진흥원
㈜다름
PA
웹접근성 퍼블리싱
Html
Bootstrap 4.0, Git
}, 



{천재교과서 운영
2023.7~2023.12
천재교육
㈜케스프리
운영
천재교과서 밀크T웹탭앱 운영
HTML
JS, SVN
}, 



{
골프존 커머스
2023.4~2023.6
㈜골프존
㈜라이트솔루션
PA
Vue 3.0 구축 중 중간 투입 후 퍼블 마무리
Vue.js
Vue3.0, Sass, Git
}, 



{
우체국 FC영업지원 고도화 
2021.12~2022.12
SK컨소시엄
㈜프로니스정보기술
퍼블 PL
우체국 보험 영업지원 솔루션 PA 3 관리 및 구축
JSP
JSP, SVN
}, 



{
웹기반솔루션개발프로젝트
2021.9~2021.11
㈜새롬정보시스템
㈜새롬정보시스템
PA
병원 영업 내부 솔루션 고도 화 및 개선 , 개발 협업
Vue.js
Vue.js, Git
}, 



{
가상화폐 거래소 My asset
2021.6~2021.8
㈜블록체인과암호화폐
㈜블록체인과암호화폐
PL
가상자산거래소 구축
퍼블리싱 PL 
Vue.js, 웹앱
Git
}, 



{
노스페이스 리뉴얼 시안
2021.2~2021.5
영원아웃도어
에스티컴
PA
노스페이지 리뉴얼 UI 시안작업
HTML
HTML, Git
}, 



{
중앙대학교 eAdvisor
2020.9~2020.12
한화시스템즈
코너스톤 인터렉티브
퍼블 PL
중앙대학교 인력관리 AI 프로그램 e-advisor 신규 개발 관련, 시스템 UI 개발 PL 업무
JSP
PUG, JSP
}, 



{
비상교육 사이트 운영
2020.4~2020.8
비상교육
비상교육
프리랜서 운영
비상교육 내 패밀리 사이트 6종 운영
HTML, React.js
SVN, React.js
}, 



{
LG U+ 홈페이지 운영
2019.5~2020.3
LG U+
Concentrix
프리랜서 운영
LG 유플러스 홈페이지 운영 및 개선
HTML
HTML, 내부 형상관리
}, 



{
아모레퍼시픽 직원몰 구축
2019.4~2019.5
아모레퍼시픽
더넷
프리랜서 구축
아모레퍼시픽 직원 내부 쇼핑몰 메인 및 서브페이지 레이아웃

}, 



{
내부회계시스템 구축
2018.12~.2019.2
비즈엔젤
비즈엔젤
퍼블리싱 PL
Bootstrap + Canvas 차트 UI 고도화 작업

}, 



{오빵닷컴 사이트 구축
2019.2
오빵닷컴
프리랜서
프리랜서 구축
프리랜서 구축

}, 



{반응형 모바일 하이브리드앱 개발
2018.11~2018.12
㈜액티버
㈜액티버
퍼블리싱 PA
퍼블리싱 PA

}, 



{미래엔 디지털 교과서
2018.9~2018.11
Wncoms
Wncoms
콘텐츠 퍼블리싱
미래엔 디지털교과서 중등학교 영어 (9개단원 중 9개 단원)/과학(9개단원 중 9개 단원) 교과서 퍼블리싱
HTML
HTML, JQuery
}, 



{
CAS 회계관리 웹 프로그램 개선
2018.7~2018.9
CAS
CAS
퍼블 PL
테이블 코딩으로 되어 있던 회계 및 인사 관리 프로그램에 Bootstrap + Canvas 차트 UI고도화 작업
JSP
Bootstrap
}, 



{
노랑풍선 해외호텔 구축
2018.4~2018.7
저스트고
노랑풍선
퍼블 PA
노랑풍선 여행사의 해외호텔 런칭에 따른 모바일 웹 + PC 웹 버전 신규 구축 및 개발, 관련 퍼블리싱 전체 전담
HTML
Html5, sass
}, 



{
비상교육 디지털 교과서
2017.7~2018.3
비상교육
이누코리아
퍼블리싱
비상교육 디지털 교과서 퍼블리싱jade, sass
}, 



{
쇼핑몰 카리스
2015.12~2016.4
매드스퀘어
매드스퀘어
퍼블리싱
글로벌 쇼핑몰 플랫폼, 반응형 웹 퍼블리싱Html5
}, 



{
현대건설 내부 홈페이지 리뉴얼
2015. 9~11
현대건설
노스
퍼블리싱
현대건설 내부 솔루션 개선 프로젝트- 기존의 테이블 코딩을 웹표준 퍼블리싱으로 변경웹 접근성
}, 



{
경기 MICE Bureau CRM
2015.10
경기 관광공사
노스
퍼블리싱
경기관광공사 내부 CRM 시스템 프론트 기획 및 개발부트스트랩
}, 



{
Kintex 홈페이지 리뉴얼
2015.7
Kintex
노스
퍼블리싱
킨텍스 국제 전시장, 웹접근성 사이트 메인 디자인, 서브 레이아웃 디자인 변경건웹 접근성
}, 



{
㈜ 주성 엔지니어링 리뉴얼
2015.6~8
주성 엔지니어링
노스
퍼블리싱
주성엔지니어링 홈페이지 구축 반응형 웹 작업반응형웹
}, 



{
현대건설 영문 홈페이지 구축
2015.5
현대건설
노스
퍼블리싱
반응형 레이아웃, 전체 소스 퍼블리싱 단독 작업,반응형웹
}, 



{
이무원 한의원 리뉴얼
2015.4
이문원 한의원
노스
퍼블리싱
한의원 홈페이지 반응형 퍼블리싱, 다국어 작업반응형웹
}, 



{
KDI 국제정책대학원 eKSP 컨텐츠
2015.1~3
KDI
노스
콘텐츠 퍼블리싱
대한민국 발전상을 해외에 알리는 교육 컨텐츠를 HTML5 기반 컨텐츠로 제작
HTML, JS
Tweenmax
}, 



{
광동한방병원 리뉴얼
2014.11~2015.11
광동한방병원
노스
퍼블리싱
광동한방병원 홈페이지 재구축, 워드프레스 > 반응형 자체 솔루션으로 변경웹접근성
}, 



{
천재교육 디지털 교과서
2013.9~2014.3
천재교육
소프트큐브, 노스
콘텐츠 퍼블리싱
디지털 교과서 HTML5 퍼블리싱 14개중 5개 단원부트스트랩
}, 



{
서울 신용평가원 Sirem24
2013.6~8
서울신용평가원
소프트큐브
퍼블리싱
웹 접근성 인증마크 획득 퍼블리싱 프로젝트웹접근성
}, 



{
Samsunb Magicinfo 스마트TV 웹 앱
2013.5
삼성전자
소프트큐브
퍼블리싱HTML5
}, 



{
듀오 삼성카드 CP 사이트
2013.2
듀오
소프트큐브
퍼블리싱웹표준
}
*/
