# Weather Native App

노마드코더 강의를 따라 만든 React Native를 이용한 날씨 앱 만들기!

##### React Native로 날씨앱 만들기

- https://nomadcoders.co/react-native-fundamentals/lobby

---

> **#0.2 Expo vs RN CLI**

###### React Native CLI

- Native File 들을 더 많이 컨트롤해야 할 때 필요하다고 합니다.

###### Expo

- Expo에는 더 많은 API를 확보하고 있으며, 수동적인 작업을 최소화 할 수 있습니다.
- 하지만 Native File의 관리는 할 수 없어요.
- 개인적인 간단한 프로젝트에는 적합하나, 대기업과 같은 대규모 프로젝트에서는
  Native File의 관리가 필요할 수 있으므로 부적합하다고 생각해요..!
- 또한, Expo는 iOS와 Android 모두를 충족시키는 어플리케이션을 빌드해줄 수 있어요!

---

> **#0.5 does React Native Work?**

###### Android / iOS 어플리케이션을 만드는 방법

1. 완전 Native한 방법으로 Swift or Object-C로 iOS 앱을 만드는 것 혹은 Java or Kotlin으로 Android 앱을 만드는 것.
2. 앱 기반 웹뷰를 만드는 것으로 매우 간단한 앱을 만들고, Cordova 또는 PhoneGap을 이용하여, 그 안에 HTML, CSS를 작동하여 즉, 앱 안에 작동하는 웹사이트 같은 것.
3. **React Native** 방식

   - 자바스크립트를 통해 iOS와 Android의 네이티브 엔진에게 자바스크립트를 이용한 메세지를 보냄으로써 연결을 해주는 것.
   - 인스타그램과 같이 사진을 업로드하고 댓글을 달거나 하는 앱을 만드는 것에는 좋지만, 게임 혹은 증강현실 등과 같이 최적화에 시간이 많이 필요한 앱에는 부적절해요.
   - React Native는 자바스크립트와 폰 속 코드 사이의 커뮤니케이션을 쉽게 하기 위해 만들어진 것이에요.
