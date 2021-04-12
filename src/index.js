import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App"
//  {
//    Profile;
//  }
// import Events from './Events'
// import Forms from './Forms'
// import Fruit from './Fruit'
// import Person from './Person'
// import School from './School'
// import Counter from './Counter'
// import ToDo from './ToDo'
import reportWebVitals from "./reportWebVitals";
// import Header from "./Component/Header";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import Todo from "./Component/Todo";
// import HomePage from "./Pages/HomePage";
// import AboutPage from "./Pages/AboutPage";
// import ContactPage from "./Pages/ContactPage";
// import ServicePage from "./Pages/ServicePage";
// import ProfilePage from "./Pages/ProfilePage";
// import ProfileDetail from "./Pages/ProfileDetail";
// import ProtectedPage from "./Pages/ProfilePage"
// import LoginPage from "./Pages/LoginPage"
// import ProtectedRoute from "./Component/ProtectedRoute"
// import UserContextProvider from "./Context/UserContext"
// import AuthContextprovider from "./Context/AuthContext"


// let isLoggedIn = false

ReactDOM.render(
  <React.StrictMode>
    <Todo />
    {/* <AuthContextprovider>
      <UserContextProvider> */}
        {/* <BrowserRouter> */}
          {/* <Header /> */}
          {/* <Switch> */}
            {/* <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/service" component={ServicePage} />
            <Route path="/profile" exact component={ProfilePage} />
            <Route path="/profile/:userId" component={ProfileDetail} />
            <Route path="/login" component={LoginPage} />
            <ProtectedRoute
              path="/protected"
              component={ProtectedPage}
              isLoggedIn={isLoggedIn} */}
            {/* /> */}
          {/* </Switch> */}
        {/* </BrowserRouter> */}
      {/* </UserContextProvider>
    </AuthContextprovider> */}
    {/* <Person name ="Hellen" age = {20} gender = "Female" />
    <School name = "Code Coast" location = "Adisadel Estate" numberOfCourses = {6}/>
    <Counter /> */}
    {/* <ToDo /> */}
    {/* <Events /> */}
    {/* <Fruit />
    <Forms /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>

//     <School name = "Code Coast" location = "Adisadel Estate" numberOfCourses = {6}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
