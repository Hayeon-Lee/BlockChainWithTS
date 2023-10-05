## 레포지토리 생성 목적

<hr />
<br />

해당 레포지토리 생성 목적은 아래와 같습니다.

1. 타입스크립트의 이해도를 높이고 이를 응용하는 능력을 향상시킵니다.

2. 블록체인의 개념을 가볍게 공부해보고, 직접 만들어봅니다.

<br />
<hr />

## 공부한 내용

<br />

1. typescript를 이용한 프로젝트 생성 시 필요한 사전 작업(window)

   i. 폴더를 생성한 뒤 VSCode에서 이를 열어줍니다.

   ii. 노드를 이용할 예정이므로 아래와 같은 명령어를 입력합니다.

   ```shell
   npm init -y
   ```

   iii. 타입스크립트를 설치해줍니다.

   ```shell
   npm install -D typescript
   ```

   iv. (선택) package.json에서 "main" 부분을 지워줍니다.

   v. package.json 파일의 script 부분을 아래와 같이 수정합니다.

   ```json
       "scripts": {
           "build": "tsc"
       },
   ```

<br />

2. tsconfig.json

   tsconfig.json 파일은 타입스크립트 설정 파일이라고도 불립니다.

   이 파일의 역할은 타입스크립트를 자바스크립트로 변환할 때 설정을 정의하는 것입니다.

   ```json
   {
     "include": ["src"],
     "compilerOptions": {
       "outDir": "build",
       "target": "ES6"
     }
     "lib": ["ES6", "DOM"]
   }
   ```

   - include: 변환할 폴더를 지정합니다.

   - outDir: 결과가 저장되는 폴더를 지정합니다.

   - target: 자바스크립트의 버전을 지정합니다.

   - lib: 정의 파일의 목표로 하는 런타임 환경을 알려준다. TS는 JS가 갖고 있는 라이브러리를 갖고 있다.

   - d.ts: js의 타입을 정의해준 ts 파일. lib에 작성된 환경들의 JS파일들 내부 API들 type이 저장되어 있다.

<br />
