# 퍼스트경영연구소 랜딩사이트

정책자금 전문 컨설팅 퍼스트경영연구소의 공식 랜딩사이트.

🌐 **라이브**: [firstbizkorea.com](https://firstbizkorea.com)

---

## 기술 스택

| 항목 | 내용 |
|------|------|
| Framework | Next.js 16.2.6 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Custom CSS (Tailwind 미사용) |
| Font | Pretendard (CDN) |
| Deployment | Vercel |
| Domain | firstbizkorea.com |

---

## 주요 기능

### 페이지 구성
- **메인 (`/`)** — 풀스크린 섹션 5개, 성과사례 슬라이더, 상담 CTA
- **CEO 인사말 (`/company/greetings`)** — 대표 소개, 실적 배너, 기업인증 컨설팅
- **기업 컨설팅 (`/company/consulting`)** — 서비스 소개
- **성과사례 (`/performance`)** — 146개 실제 승인 사례 (페이지네이션)
- **성과사례 상세 (`/performance/[id]`)** — 업종, 매출, 성공전략, 거절사유, 대처방안
- **상담신청 (`/contact/consulting`)** — 폼 제출 → 시트 저장 + 이메일 알림

### 상담 데이터 수집 흐름
```
사용자 폼 제출
    ↓
Vercel API Route (/api/contact)
    ↓
① Google Sheets 자동 저장 (googleapis)
② 담당자 3명 이메일 동시 발송 (nodemailer)
```

### 보안
- Origin 검증 (허용된 도메인 외 API 호출 차단)
- IP 기반 레이트 리미팅 (분당 3회)
- 입력값 sanitize (HTML 태그 제거)
- 입력값 길이 제한

---

## 프로젝트 구조

```
├── app/
│   ├── api/contact/route.ts       # 상담 API (시트 저장 + 이메일)
│   ├── company/
│   │   ├── greetings/page.tsx     # CEO 인사말
│   │   └── consulting/page.tsx    # 기업 컨설팅
│   ├── contact/
│   │   └── consulting/page.tsx    # 상담신청 폼
│   ├── performance/
│   │   ├── page.tsx               # 성과사례 목록
│   │   ├── [id]/page.tsx          # 성과사례 상세
│   │   ├── data.ts                # 146개 케이스 데이터
│   │   └── detailData.ts          # 146개 케이스 상세 데이터
│   ├── globals.css                # 전체 스타일 + 반응형
│   ├── icon.svg                   # 파비콘 (GY)
│   └── layout.tsx                 # 공통 레이아웃 + OG 태그
└── components/
    ├── Header.tsx                  # 네비게이션 (투명/고정 전환)
    ├── Footer.tsx                  # 푸터
    └── SubPageBanner.tsx           # 서브페이지 배너
```

---

## 로컬 실행

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 접속

---

## 환경변수 설정

`.env.local` 파일 생성 후 아래 값 입력:

```env
# Google Sheets
GOOGLE_CLIENT_EMAIL=서비스계정이메일@xxx.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SPREADSHEET_ID=스프레드시트ID

# Gmail (이메일 알림)
GMAIL_USER=발신Gmail주소
GMAIL_APP_PASSWORD=앱비밀번호16자리
```

### Google Cloud 설정
1. [Google Cloud Console](https://console.cloud.google.com) → 새 프로젝트 생성
2. Google Sheets API 활성화
3. 서비스 계정 생성 → JSON 키 발급
4. 스프레드시트에 서비스 계정 이메일을 편집자로 공유

---

## Google Sheets 구조

상담신청 데이터는 아래 순서로 저장됨 (열 순서 변경 금지):

| 열 | 내용 |
|----|------|
| A | 신청일시 |
| B | 이름 |
| C | 전화번호 |
| D | 메시지 |
| E | 상태 (CRM) |
| F | 메모 (CRM) |

> **주의**: E열, F열은 CRM 시스템이 읽고 쓰는 컬럼. 열 순서 변경 시 CRM 데이터 연동 깨짐.

---

## 배포

```bash
vercel --prod
```

환경변수는 Vercel 대시보드 또는 `vercel env add` 명령어로 등록.
