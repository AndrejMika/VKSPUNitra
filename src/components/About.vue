<template>
    <div id="content">
      <!--==============================row_4=================================-->
      <div class="row_4">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4">
              <h2>
                Our Vision <span>Aliquam Nula</span>
              </h2>
              <ul class="list-vision">
                <li>
                  <div class="badge_ badge">1.</div>
                  <div class="overflow">
                    <h3><a href="#">Esque Fermen.</a></h3>
                    <p>
                      Morbi tempor quam vel massa adipiscing ut cursus mi congue
                      pellentesque nisi elit commodo. Vel ultrices vel, consequat.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="badge_ badge">2.</div>
                  <div class="overflow">
                    <h3><a href="#">Pellentesque.</a></h3>
                    <p>
                      Maecenas porta convallis libero, sit amet tempus magna
                      blandit eget. Sed ut congue mauris, a sagittis turpis
                      praesent.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="badge_ badge">3.</div>
                  <div class="overflow">
                    <h3><a href="#">Fermentum Sag.</a></h3>
                    <p>
                      Morbi tempor quam vel massa adipiscing ut cursus mi congue
                      pellentesque nisi elit commodo. Vel ultrices vel, consequat.
                    </p>
                  </div>
                </li>
              </ul>
              <h2 class="padbot1">
                Testimonials <span>Sque Fermentum</span>
              </h2>
              <ul class="list-quote">
                <li>
                  <blockquote class="quote-1">
                    <p>
                      Suspendisse auctor felis a leo placerat, a pellentesque
                      elit elementum. Mauris viverra lorem leo; Etiam vel tortor
                      vel sapien eleifend congue odio. In sit amet. Nulla velit
                      dolor, facilisis ac enim ac, malesuada.
                    </p>
                    <span>Bradley Grosh, USA</span>
                  </blockquote>
                </li>
                <li>
                  <blockquote class="quote-1">
                    <p>
                      Donec at metus facilisis, sollicitudin mauris ut,
                      condimentum tortor. Cras interdum ligula quis sapien
                      porttitor viverra. Vestibulum ante ipsum posuere cubilia
                      Curae; Fusce pharetra sapien id eros placerat scelerisque.
                    </p>
                    <span>William Dutton, USA</span>
                  </blockquote>
                </li>
              </ul>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8">
              <h2 class="padbot2">
                A Few Words About Us <span>Nullam Eu Massa Placerat</span>
              </h2>
              <h3>Nulla vitae nunc mi Aenean faucibus.</h3>
              <p class="m_bot1">
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Suspendisse auctor felis a leo placerat, a pellentesque elit
                elementum. Mauris viverra lorem leo; eu suscipit velit molestie
                eget? Nulla luctus congue enim, id pharetra tortor tincidunt quis.
                Etiam vel tortor vel sapien eleifend consequat ut eu quam. Nullam
                aliquam congue odio. In sit amet ante quis metus luctus accumsan
                et at metus. Nulla velit dolor, facilisis ac enim ac, malesuada
                ultrices nibh.
              </p>
              <h2 class="members">
                Our Members <span>Phasellus Eros</span>
              </h2>
              <div class="row">
                <ul class="thumbnails list-members clearfix">
                  <li
                    v-for="(member, index) in members"
                    :key="index"
                    class="col-lg-3 col-md-3 col-sm-4 col-xs-4 memberscol"
                  >
                    <div class="thumbnail thumbnail-1">
                      <figure>
                        <img :src="member.img" :alt="member.name" />
                      </figure>
                      <section class="maxheight">
                        <h5><a href="#">{{ member.name }}</a></h5>
                        <p>{{ member.description }}</p>
                      </section>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        members: [
          {
            img: "../../assets/img/page2_img1.jpg",
            name: "Tonny Adams",
            description: "Praesent ultricies pretium ante sit amet malesuad.",
          },
          {
            img: "../../assets/img/page2_img2.jpg",
            name: "Patrick Pool",
            description: "Morbi tempor quam vel massa adipiscing ut.",
          },
          {
            img: "../../assets/img/page2_img3.jpg",
            name: "Alan Smith",
            description: "Magna blandit eget sed ut congue mauris, a sagittis.",
          },
          {
            img: "../../assets/img/page2_img4.jpg",
            name: "John Franklin",
            description: "Praesent ultricies pretium ante sit amet malesuada.",
          },
          {
            img: "../../assets/img/page2_img5.jpg",
            name: "Sam Kromstain",
            description: "Cras id elit sit amet nisl semper eleifend sed imi.",
          },
          {
            img: "../../assets/img/page2_img6.jpg",
            name: "Tom James",
            description: "Maecenas ac mi ac ligula imperdiet aliquam cong.",
          },
          {
            img: "../../assets/img/page2_img7.jpg",
            name: "Mark Johnson",
            description: "Sit amet tempus magna congue mauris, a sagittis.",
          },
        ],
      };
    },
  };
  </script
</template>