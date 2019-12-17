<template>
  <div id="app" :class="{ success }">
      <!--for facebook shares -->
      <meta property="og:image" content="http://blavity.blavity.netdna-cdn.com/wp-content/uploads/2014/11/IMG_9764.jpg" />
      <!--/ for facebook shares-->
      <!--for twitter sharing -->
      <meta name="twitter:image" content="http://blavity.blavity.netdna-cdn.com/wp-content/uploads/2014/11/IMG_9764.jpg" />
    <section class="main">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="position-relative">
              <div class="close-wrapper">
                <a href="https://blavity.com/">
                  <svg viewbox="0 0 40 40" width="40" height="40">
                    <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 offset-md-1">
            <div class="d-flex flex-column justify-content-md-center h-100vh" :class="[success ? 'justify-content-center' : 'justify-content-end']">
              <img class="logo" src="data:img/png;base64,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" width="171" alt="blavity-news">
              <div v-if="!success">
                <h1 class="title">Get the freshest stories you need to stay engaged and entertained every day.</h1>
                <form id="email-signup-form" @submit.prevent="submit">
                  <input type="email" name="email" v-model="email" placeholder="Enter your email address" required />
                  <label><input type="checkbox" name="agreed" required>I agree to the <a href="https://blavity.com/terms-of-service">Terms of Service</a> and our <a href="https://blavity.com/privacy">Privacy Policy</a>.<span class="checkmark"></span></label>
                  <input type="submit" value="Blavitize My Inbox" />
                </form>
                <div class="social-btn-wrapper">
                  <social-sharing :url="shareURL"
                                          :title="title"
                                          :description="description"
                                          :quote="quote"
                                          :hashtags="hashtags"
                                          :twitter-user="twitter_user"
                                          inline-template>
                      <div class="d-flex justify-content-between">
                          <network network="email" class="social-btns">
                              <div class="social-email-btn d-flex justify-content-center">
                                    <div class="icon-svg" >
                                      <svg xmlns="http://www.w3.org/2000/svg" class="social-fb-icon" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="511.626px" height="511.626px" viewBox="0 0 511.626 511.626" style="enable-background:new 0 0 511.626 511.626;fill: #fff;" xml:space="preserve">
                                        <g>
                                            <g>
                                                <path d="M49.106,178.729c6.472,4.567,25.981,18.131,58.528,40.685c32.548,22.554,57.482,39.92,74.803,52.099    c1.903,1.335,5.946,4.237,12.131,8.71c6.186,4.476,11.326,8.093,15.416,10.852c4.093,2.758,9.041,5.852,14.849,9.277    c5.806,3.422,11.279,5.996,16.418,7.7c5.14,1.718,9.898,2.569,14.275,2.569h0.287h0.288c4.377,0,9.137-0.852,14.277-2.569    c5.137-1.704,10.615-4.281,16.416-7.7c5.804-3.429,10.752-6.52,14.845-9.277c4.093-2.759,9.229-6.376,15.417-10.852    c6.184-4.477,10.232-7.375,12.135-8.71c17.508-12.179,62.051-43.11,133.615-92.79c13.894-9.703,25.502-21.411,34.827-35.116    c9.332-13.699,13.993-28.07,13.993-43.105c0-12.564-4.523-23.319-13.565-32.264c-9.041-8.947-19.749-13.418-32.117-13.418H45.679    c-14.655,0-25.933,4.948-33.832,14.844C3.949,79.562,0,91.934,0,106.779c0,11.991,5.236,24.985,15.703,38.974    C26.169,159.743,37.307,170.736,49.106,178.729z"/>
                                                <path d="M483.072,209.275c-62.424,42.251-109.824,75.087-142.177,98.501c-10.849,7.991-19.65,14.229-26.409,18.699    c-6.759,4.473-15.748,9.041-26.98,13.702c-11.228,4.668-21.692,6.995-31.401,6.995h-0.291h-0.287    c-9.707,0-20.177-2.327-31.405-6.995c-11.228-4.661-20.223-9.229-26.98-13.702c-6.755-4.47-15.559-10.708-26.407-18.699    c-25.697-18.842-72.995-51.68-141.896-98.501C17.987,202.047,8.375,193.762,0,184.437v226.685c0,12.57,4.471,23.319,13.418,32.265    c8.945,8.949,19.701,13.422,32.264,13.422h420.266c12.56,0,23.315-4.473,32.261-13.422c8.949-8.949,13.418-19.694,13.418-32.265    V184.437C503.441,193.569,493.927,201.854,483.072,209.275z"/>
                                            </g>
                                        </g>
                                        <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                      </svg>
                                    </div>
                                  <label>Email</label>
                              </div>
                          </network>
                          <network network="facebook" class="social-btns">
                              <div class="social-facebook-btn d-flex justify-content-center">
                                  <div class="icon-svg-2">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="social-fb-icon" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="96.124px" height="96.123px" viewBox="0 0 96.124 96.123" style="enable-background:new 0 0 96.124 96.123;" xml:space="preserve">
                                    <g>
                                        <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"/>
                                    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                    </svg>
                                  </div>
                                  <label>Facebook</label>
                              </div>
                          </network>
                          <network network="twitter" class="social-btns">
                              <div class="social-twitter-btn d-flex justify-content-center">
                                  <div class="icon-svg">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="social-fb-icon" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                          <g>
                                            <g>
                                                <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568    C480.224,136.96,497.728,118.496,512,97.248z"/>
                                            </g>
                                          </g>
                                          <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                      </svg>
                                  </div>
                                  <label>Twitter</label>
                              </div>
                          </network>
                      </div>
                  </social-sharing>
                </div>
              </div>
              <div v-if="success">
                <h1 class="title">Thank you for <br class="d-none d-md-flex" />subscribing!</h1>
                  <div class="social-btn-wrapper">
                      <social-sharing :url="shareURL"
                                      :title="title"
                                      :description="description"
                                      :quote="quote"
                                      :hashtags="hashtags"
                                      :twitter-user="twitter_user"
                                      inline-template>
                          <div class="d-flex justify-content-between">
                              <network network="email" class="social-btns">
                                  <div class="social-email-btn d-flex justify-content-center">
                                      <div class="icon-svg" >
                                          <svg xmlns="http://www.w3.org/2000/svg" class="social-fb-icon" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="511.626px" height="511.626px" viewBox="0 0 511.626 511.626" style="enable-background:new 0 0 511.626 511.626;fill: #fff;" xml:space="preserve">
                                        <g>
                                            <g>
                                                <path d="M49.106,178.729c6.472,4.567,25.981,18.131,58.528,40.685c32.548,22.554,57.482,39.92,74.803,52.099    c1.903,1.335,5.946,4.237,12.131,8.71c6.186,4.476,11.326,8.093,15.416,10.852c4.093,2.758,9.041,5.852,14.849,9.277    c5.806,3.422,11.279,5.996,16.418,7.7c5.14,1.718,9.898,2.569,14.275,2.569h0.287h0.288c4.377,0,9.137-0.852,14.277-2.569    c5.137-1.704,10.615-4.281,16.416-7.7c5.804-3.429,10.752-6.52,14.845-9.277c4.093-2.759,9.229-6.376,15.417-10.852    c6.184-4.477,10.232-7.375,12.135-8.71c17.508-12.179,62.051-43.11,133.615-92.79c13.894-9.703,25.502-21.411,34.827-35.116    c9.332-13.699,13.993-28.07,13.993-43.105c0-12.564-4.523-23.319-13.565-32.264c-9.041-8.947-19.749-13.418-32.117-13.418H45.679    c-14.655,0-25.933,4.948-33.832,14.844C3.949,79.562,0,91.934,0,106.779c0,11.991,5.236,24.985,15.703,38.974    C26.169,159.743,37.307,170.736,49.106,178.729z"/>
                                                <path d="M483.072,209.275c-62.424,42.251-109.824,75.087-142.177,98.501c-10.849,7.991-19.65,14.229-26.409,18.699    c-6.759,4.473-15.748,9.041-26.98,13.702c-11.228,4.668-21.692,6.995-31.401,6.995h-0.291h-0.287    c-9.707,0-20.177-2.327-31.405-6.995c-11.228-4.661-20.223-9.229-26.98-13.702c-6.755-4.47-15.559-10.708-26.407-18.699    c-25.697-18.842-72.995-51.68-141.896-98.501C17.987,202.047,8.375,193.762,0,184.437v226.685c0,12.57,4.471,23.319,13.418,32.265    c8.945,8.949,19.701,13.422,32.264,13.422h420.266c12.56,0,23.315-4.473,32.261-13.422c8.949-8.949,13.418-19.694,13.418-32.265    V184.437C503.441,193.569,493.927,201.854,483.072,209.275z"/>
                                            </g>
                                        </g>
                                        <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                      </svg>
                                      </div>
                                      <label>Email</label>
                                  </div>
                              </network>
                              <network network="facebook" class="social-btns">
                                  <div class="social-facebook-btn d-flex justify-content-center">
                                      <div class="icon-svg-2">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="social-fb-icon" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="96.124px" height="96.123px" viewBox="0 0 96.124 96.123" style="enable-background:new 0 0 96.124 96.123;" xml:space="preserve">
                                    <g>
                                        <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"/>
                                    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                    </svg>
                                      </div>
                                      <label>Facebook</label>
                                  </div>
                              </network>
                              <network network="twitter" class="social-btns">
                                  <div class="social-twitter-btn d-flex justify-content-center">
                                      <div class="icon-svg">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="social-fb-icon" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                          <g>
                                            <g>
                                                <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568    C480.224,136.96,497.728,118.496,512,97.248z"/>
                                            </g>
                                          </g>
                                          <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                      </svg>
                                      </div>
                                      <label>Twitter</label>
                                  </div>
                              </network>
                          </div>
                      </social-sharing>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",

  data() {
    return {
      email: "",
      success: false,
      shareURL: "https://join.blavity.com/",
      quote: "Get the freshest stories you need to stay engaged and entertained every day.",
      description: "The Community for Black Creativity and News | BLAVITY",
      title: "Get the freshest stories you need to stay engaged and entertained every day.",
      hashtags: "Blavity, BlavityNews, JoinNow",
      twitter_user: "blavity"
    };
  },

  methods: {
    submit() {
      const { email } = this;

      axios
        .post("https://api.blavity.io/subscribers/blavity?list=blavityDaily", {
          email
        })
        .then(() => {
          this.success = true;
        })
        .catch(() => {
          this.success = false;
        });
    }
  }
};
</script>

<style src="./assets/fonts/TT+Norms/stylesheet.css"></style>
<style>
* {
  box-sizing: border-box;
  font-variant-ligatures: none;
}

*::before,
*::after {
  box-sizing: border-box;
}

::placeholder {
  color: #e8e8e8;
  opacity: 1;
}

:-ms-input-placeholder {
  color: #e8e8e8;
}

::-ms-input-placeholder {
  color: #e8e8e8;
}

input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

input[type="radio"],
input[type="checkbox"] {
  padding: 0;
}

html,
body,
#app {
  height: 100%;
  margin: 0;
}

h1 {
  margin: 0;
}

.h-100vh {
  height: 100vh !important;
}

.d-flex {
  display: flex !important;
}

.d-none {
  display: none !important;
}

.flex-column {
  flex-direction: column !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.position-relative {
  position: relative !important;
}

.container-fluid {
  margin-right: auto;
  margin-left: auto;
  padding-right: 132px;
  padding-left: 132px;
  width: 100%;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col,
.col-auto,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm,
.col-sm-auto,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md,
.col-md-auto,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg,
.col-lg-auto,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

#sovrn_beacon {
  display: none;
}

.logo {
  margin-bottom: 24px;
}

.main {
  background-image: url(./assets/images/desktop/Newsletter-LP_pic.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100%;
  display: flex;
  align-items: center;
}

.title {
  font-family: "TT Norms";
  font-size: 48px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-bottom: 15px;
}

.close-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
}

.close-wrapper a {
  width: 40px;
  height: 40px;
}

.close-x {
  stroke: #ffffff;
  fill: transparent;
  stroke-linecap: round;
  stroke-width: 5;
}

.close-wrapper a:hover .close-x {
  stroke: rgba(0, 0, 0, 0.5);
}

#email-signup-form {
  display: flex;
  flex-direction: column;
}

#email-signup-form label {
  opacity: 0.77;
  font-family: "TT Norms";
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: rgba(255, 255, 255, 0.77);
  cursor: pointer;
  display: block;
  margin-bottom: 28px;
  padding-left: 24px;
  position: relative;
  user-select: none;
}

#email-signup-form input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 3px;
  left: 0;
  height: 14px;
  width: 14px;
  background-color: #ffffff;
  border: 1px solid transparent;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

#email-signup-form label input:checked ~ .checkmark {
  border: 1px solid #f44a38;
}

#email-signup-form label input:checked ~ .checkmark:after {
  background-image: url(./assets/images/check.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
}

#email-signup-form label .checkmark:after {
  left: 2px;
  top: -1px;
  width: 16px;
  height: 13px;
}

#email-signup-form label a {
  color: #ffffff;
}

#email-signup-form input[type="email"],
#email-signup-form input[type="submit"] {
  font-family: "TT Norms";
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  height: 56px;
  width: 400px;
  max-width: 100%;
}

#email-signup-form input[type="email"] {
  background-color: #ffffff;
  color: #cccccc;
  font-weight: normal;
  margin-bottom: 16px;
  text-align: center;
}

#email-signup-form input[type="submit"] {
  background-color: #f44a38;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
}

.success .main {
  display: flex;
}

.social-btn-wrapper{
    display: block;
    position: relative;
    width: 400px;
    margin-top: 20px;
    max-width: 100%;
}

.social-btns{
  width: 32%;
  color: #fff;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
    font-family: "TT Norms";
}

.social-email-btn{
  background-color: #cfbc58;
  padding: 10px;
}

.social-twitter-btn{
  background-color: #38a1f3;
  padding: 10px;

}

.social-facebook-btn{
  background-color: #3b5998;
  padding: 10px;
}

.social-fb-icon{
    width: 25px;
    height: auto;
    max-height: 20px;
    fill: #fff;
}

.icon-svg{
    width: 25px;
    margin-right: 5px;
}

.icon-svg-2{
    width: 25px;
}

.social-btns label{
    cursor: pointer;
}

.justify-content-between{
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.justify-content-center{
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: center;
}

@media (min-width: 768px) {
  .d-md-flex {
    display: flex !important;
  }

  .col-md-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .offset-md-1 {
    margin-left: 8.333333%;
  }

  .justify-content-md-center {
    justify-content: center !important;
  }
}

@media (min-width: 992px) {
  .col-lg-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .offset-lg-1 {
    margin-left: 8.333333%;
  }

  .justify-content-lg-center {
    justify-content: center !important;
  }
}

@media (max-width: 1023px) {
  .container-fluid {
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media (max-width: 767px) {
  .main {
    background-image: url(./assets/images/mobile/Mobile-Newsletter-LP_pic.jpg);
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .logo {
    margin-bottom: 36px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .close-wrapper {
    right: -32px;
  }

  #email-signup-form {
    margin-bottom: 10px;
  }

  #email-signup-form label {
    font-size: 12px;
    line-height: 20px;
  }

  #email-signup-form label br {
    display: none;
  }

  #email-signup-form input[type="email"],
  #email-signup-form input[type="submit"] {
    height: 52px;
    width: 100%;
  }

  #email-signup-form input[type="email"] {
    font-size: 16px;
    margin-bottom: 13px;
  }

  #email-signup-form input[type="submit"] {
    font-size: 14px;
    font-weight: bold;
  }

  .social-btn-wrapper{
        width: 100%;
        max-width: 100%;
        margin-bottom: 70px;
  }

  .social-facebook-btn {
      padding: 10px 3px;
  }
}

@media (min-width: 768px) and (max-width: 991px){
    .icon-svg, .icon-svg-2{
        margin: 0;
    }
    .social-btns label{
        display: none;
    }
}

@media (max-width: 575px){
    .icon-svg, .icon-svg-2{
        margin: 0;
    }
    .social-btns label{
        display: none;
    }
}

@media (-webkit-min-device-pixel-ratio: 1.5), not all, not all, not all {
  .main {
    background-image: url(./assets/images/desktop/Newsletter-LP_pic@2x.jpg);
  }
}

@media (-webkit-min-device-pixel-ratio: 1.5) and (max-width: 767px),
  not all,
  not all,
  not all {
  .main {
    background-image: url(./assets/images/mobile/Mobile-Newsletter-LP_pic@2x.jpg);
  }
}
</style>
