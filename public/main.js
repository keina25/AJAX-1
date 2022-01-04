//const { disconnect } = require("process");

//const { getPackedSettings } = require("http2");

//const { getMaxListeners } = require("process");

//console.log('我是main.js2');
let n = 1
getPage.onclick = () =>{
  const request = new XMLHttpRequest();
  request.open("GET",`/page${n+1}`)
  request.onreadystatechange = ()=>{
    if(request.readyState ===4 && request.status ===200){
      const array= JSON.parse(request.response);
      array.forEach(item =>{
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send()
};

getJSON.onclick = ()=>{
  const request = new XMLHttpRequest();
  request.open("GET","/5.json");
  request.onreadystatechange= ()=>{
    if(request.readyState ===4 && request.status ===200){
      console.log(request.response) //请求到的字符串
      const object = JSON.parse(request.response); 
      //JSON.parse把符合json语法的字符串变成对应的对象或其他东西
      myName.textContent = object.name
      console.log(object) //请求到的是用js合成的对象
    }
  };
  request.send()
};

getXML.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open("GET","/4.xml");
    request.onreadystatechange = ()=>{
        if(request.readyState ===4 && request.status ===200){
          const dom = request.responseXML;
          const text = dom.getElementsByTagName('warning')[0].textContent
          //找一个warning标签，获取里面的内容,这里是伪数组，所以获取[0]
          console.log(text.trim()) //trim（）会把周围的回车去掉
        };
    };
  request.send();
};

getHTML.onclick = () =>{
  const request = new XMLHttpRequest();  //创建一个请求
  request.open('GET', '/3.html'); //调用请求，路径/3.html
  request.onload = ()=>{    //监听它的加载等于一个函数
    //console.log(request.response);
    const div = document.createElement('div')   //创建 div 标签
    div.innerHTML = request.response //填写div 内容
    document.body.appendChild(div)  //把这个div插到body里面
  };    
  request.onerror = () =>{}; 
  request.send();   
};
getJS.onclick = () =>{
  const request = new XMLHttpRequest();
  request.open('GET','/2.js');
  request.onload = () =>{
    //console.log(request.response);

    //创建 script 标签
    const script = document.createElement('script')
    //填写 script 内容
    script.innerHTML = request.response
    //插到身体里面
    document.body.appendChild(script) //下载并且执行了
  };
  request.onerror = ()=>{};
  request.send();
};

getCSS.onclick = () =>{
  const request = new XMLHttpRequest();
  request.open('GET', '/style.css'); //获取资源都用get 
  //readyState = 1
  request.onreadystatechange =()=>{
    console.log(request.readyState)
    if(request.readyState ===4){
      //console.log('下载完成,但不知道是成功 2XX还是失败 4XX 5XX')
      if(request.status >= 200 && request.status < 300){    //http状态以2开头都表示成功
         //创建style标签
         const style =  document.createElement('style');
         //填写style内容
         style.innerHTML = request.response;
         //插到头里面
         document.head.appendChild(style);
      }else{
        alert('加载CSS失败')
       }
      console.log(request.status)
       // request.onload = () =>{
       // console.log('request.response')
       // console.log(request.response); 
    }
  };
      //request.onerror = () =>{
      //console.log('失败了');
      //};  //因为onerror不能用，所以删掉，用onreadstatechange
request.send(); //readyState = 2
};