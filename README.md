# example-transplier-babel

## Install

### 1. 프로젝트 초기화

`npm install -y`

### 2. babel 설치

`npm install --save-dev @babel/core @babel/cli @babel/preset-env`

- 3개의 패키지를 한번에 설치하는 패턴

@babel/core: babel의 핵심 기능을 제공하는 패키지
@babel/cli: 커맨드라인에서 babel을 사용할 수 있게 해주는 패키지
@babel/preset-env: babel이 코드를 변환할 때 필요한 plugin을 모아둔 패키지
- env : evnironment의 약자로, babel이 코드를 어떤 환경에 맞게 변환할지 설정하는 옵션

- devDependencies, 즉 개발용으로만 사용할 패키지이기 때문에 --save-dev 옵션을 사용하여 설치
- babel은 코드를 변환할 때 preset을 사용한다. preset은 plugin들의 모음이다. preset을 사용하면 plugin을 일일이 설치할 필요가 없다.
  
