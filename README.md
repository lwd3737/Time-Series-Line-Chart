# 설치

```
git clone https://github.com/lwd3737/Time-series-line-chart.git
```

```
npm install
```

# 실행

```
npm start
```

# 폴더 구조

### assets : 정적 리소스를 관리하는 모듈

### components : UI 컴포넌트를 관리하는 모듈

#### -Checkbox : 체크박스 컴로넌트(테이블 항목 선택)

#### -DataDownload : 데이터 다운로드 컴포넌트(csv 파일 다운로드)

#### -LineChart : 라인 차트 컴포넌트(시계열 차트)

#### -Radiobox : 라디오 박스 컴포넌트(Y축 선택)

#### -SelectColor : 라인 차트 선 색을 선택할 수 있는 컴포넌트

#### -Table : 차트 데이터 담고 있는 테이블 컴포넌트

### containers : 비즈니스 로직, 상태, 데이터 처리하는 컴포넌트를 관리하는 모듈

#### ChartsContainer : 차트와 관련된 UI 컴포넌트의 비즈니스 로직, 데이터, 상태를 처리하는 컴포넌트

### unitls : 유틸리티 함수를 관리하는 모듈

#### parsing : raw 데이터를 가공해서 UI 렌더링에 사용할 수 있는 데이터로 변환하는 유틸리티 함수들

### theme : 스타일 속성을 관리하는 모듈

# 구현한 기능

1. 시계열 차트(차트에 데이터 항목별로 표시)
2. 차트와 연동된 데이터를 테이블에 표시(색상, 항목, 평균, 편차, 최소, 최대)
3. 차트의 라인에 마우스로 hover시 테이블에 해당 항목 highlight(background color값 변화)
4. 차트의 각 항목 또는 전체 라인을 숨김 또는 표시 (테이블의 체크 박스)
5. 차트의 각 라인의 Y축 선택(테이블의 라디오 박스)
6. csv데이터 다운로드
