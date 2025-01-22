<template>


    <!--==============================row_1=================================-->
    <div class="row_1">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-8 welcome">
            <h2>welcome<span>to our volleyball team site</span></h2>
            <figure><img src="../../assets/img/page1_img1.jpg" alt="Welcome"></figure>
            <div class="textinfo1">
              <h5>lisa clown, team member</h5>
              <h4>Mes cuml dia sed inenias ingerto lot aliiqtes dolore ipsum.</h4>
              <p>Mes cuml dia sed in lacus ut eniascet ingerto aliiqt es site amet eismod ictor ut ligulate ameti dapibus ticdu nt mtsen lusto dolor ltissim comes cuml dia sed inertio lacusueni ascet dolingerto aliiqt sit.</p>
              <p>Ut eniascet ingerto aliiqt es site amet eismod ictor uligulate ameti dap ibus ticdu nt mtsen lusto dolor ltissim comes cuml dia sed inertio lacu sueni ascet dolingerto aliiqt sit amet.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 lnews">
            <h2>latest<span>news</span></h2>
            <ul class="list-whatsnew">
              <li v-for="(news, index) in newsList" :key="index" class="whatsnewcol">
                <div class="badge_2 badge">
                  <em></em>
                  <p class="badgetxt">{{ news.date.split(" ")[0] }}<span>{{ news.date.split(" ")[1] }}</span></p>
                  <a class="box1" href="#"><img :src="news.icon" alt="News"></a>
                </div>
                <div class="overflow">
                  <h3><a href="#">{{ news.title }}</a></h3>
                  <h5>{{ news.subtitle }}</h5>
                  <p>{{ news.description }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--==============================row_2=================================-->
    <div class="row_2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <ul class="list1">
              <li v-for="(icon, index) in icons" :key="index">
                <a href="#"><img :src="icon" alt=""><span></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--==============================row_3=================================-->
    <div class="row_3">
      <div class="container">
        <div class="row">
          <ul class="list2">
            <li v-for="(section, index) in sections" :key="index" class="col-lg-4 col-md-4 col-sm-4 list2col">
              <figure><img :src="section.image" :alt="section.title"></figure>
              <h2>{{ section.title }}</h2>
              <h4>{{ section.subtitle }}</h4>
              <p>{{ section.description }}</p>
              <a href="#" class="btn btn-primary btn1">more info</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

</template>
<script>
export default {
  data() {
    return {
      slides: [
        {
          image: "../../assets/img/picture1.jpg",
          caption: "Striving to be<br>the leaders",
        },
        {
          image: "../../assets/img/picture2.jpg",
          caption: "We know the<br>taste of victory",
        },
        {
          image: "../../assets/img/picture3.jpg",
          caption: "Volleyball is our<br>game for a lifetime",
        },
      ],
      newsList: [
        {
          date: "15 oct",
          icon: "../../assets/img/page1_icon2.png",
          title: "Dolore Ipsum",
          subtitle: "Lorem Ipsum dolore",
          description:
            "Morbi tempor quam vel massa adi piscing ute cursus mi congue pelle ntesque niselit er comte modo. velultrices vel, conseq.",
        },
        {
          date: "18 oct",
          icon: "../../assets/img/page1_icon2.png",
          title: "Dolore Ipsum",
          subtitle: "Lorem Ipsum dolore",
          description:
            "Morbi tempor quam vel massa adi piscing ute cursus mi congue pelle ntesque niselit er comte modo. velultrices vel, conseq.",
        },
      ],
      icons: [
        "../../assets/img/page1_icon3.jpg",
        "../../assets/img/page1_icon4.jpg",
        "../../assets/img/page1_icon5.jpg",
        "../../assets/img/page1_icon6.jpg",
      ],
      sections: [
        {
          image: "../../assets/img/page1_img2.jpg",
          title: "The TEAM",
          subtitle: "Mes cuml dia sed inenias cet inger lot aliiqtes dolore ipsum ame.",
          description:
            "Mes cuml dia sed in lacus ut eniascet ingerto aliiqt es site amet eismod ictor ut ligulate ameti dapibus ticdu nt mtsen lusto dolor ltissim comes cuml dia sed.",
        },
        {
          image: "../../assets/img/page1_img3.jpg",
          title: "TRAININGS",
          subtitle: "Mes cuml dia sed inenias cet inger lot aliiqtes dolore ipsum ame.",
          description:
            "Mes cuml dia sed in lacus ut eniascet ingerto aliiqt es site amet eismod ictor ut ligulate ameti dapibus ticdu nt mtsen lusto dolor ltissim comes cuml dia sed.",
        },
        {
          image: "../../assets/img/page1_img4.jpg",
          title: "SCHEDULE",
          subtitle: "Mes cuml dia sed inenias cet inger lot aliiqtes dolore ipsum ame.",
          description:
            "Mes cuml dia sed in lacus ut eniascet ingerto aliiqt es site amet eismod ictor ut ligulate ameti dapibus ticdu nt mtsen lusto dolor ltissim comes cuml dia sed.",
        },
      ],
    };
  },
};
</script>