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
  
### 3. babel config 파일 생성

`npm init` 과 같이 간편하게 초기화 하는 방법을 채택하고 있지 않다 (상황에 따라서 여러가지 설정을 개별로 하기 때문에)
따라서 불편하지만, babel.config.json 파일을 직접 생성해야 한다.

```json
{
  "presets": ["@babel/preset-env"]
}
```

- `babel.config.json` 파일을 생성하고, 위와 같이 작성한다.
- `babel.config.json` 파일은 babel이 어떤 preset을 사용할지 설정하는 파일이다.
- `babel.config.json` 파일은 package.json 파일과 같은 위치에 있어야 한다.
- `babel.config.json` 파일을 생성하고 나면, babel은 @babel/preset-env를 사용하여 코드를 변환한다.
- `babel.config.json` 파일을 생성하지 않으면, babel은 코드를 변환하지 않는다.
- .babelrc 파일을 사용하여 babel을 설정할 수도 있다. babel.config.json 파일과 .babelrc 파일은 동일한 역할을 한다.
- `babel.config.json` 파일을 사용하면, babel이 프로젝트 전체에 적용된다. .babelrc 파일을 사용하면, babel이 적용된 디렉토리에서만 babel이 적용된다.
- 본 예제에서는 여러가지 트랜스파일링을 하지 않을 것이므로 json 파일로 config 파일을 설정했다.
