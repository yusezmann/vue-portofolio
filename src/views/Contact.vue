<template>
  <div class="contact">
    <h1 class="animate__animated animate__backInDown">Contact</h1>

    <div class="row">
      <div
        class="col-md-6 d-flex text-left animate__animated animate__backInLeft"
      >
        <div class="info">
          <div class="address">
            <i class="fa fa-map-marker-alt"></i>
            <h4>Location:</h4>
            <p>Griya Cempaka Arum B6 No.29, Bandung, Jawa Barat</p>
          </div>

          <div class="email">
            <i class="fa fa-envelope"></i>
            <h4>Email:</h4>
            <p>yusezmann@gmail.com</p>
          </div>

          <div class="phone">
            <i class="fa fa-phone"></i>
            <h4>Call:</h4>
            <p>+62 8565 9239 337</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.452522143798!2d107.70625931477305!3d-6.955825994974657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a8676923c604343!2zNsKwNTcnMjEuMCJTIDEwN8KwNDInMzAuNCJF!5e0!3m2!1sid!2sid!4v1639030979396!5m2!1sid!2sid"
            width="100%"
            height="240px"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div
        class="contact__form col-md-5 animate__animated animate__backInRight"
      >
        <form name="contact-form ">
          <div class="row">
            <div class="form-group col-md-6">
              <label for="name">Your Name</label>
              <input
                type="text"
                name="nama"
                class="form-control"
                id="name"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="name">Your Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="name">Subject</label>
            <input
              type="text"
              class="form-control"
              name="subject"
              id="subject"
              required
            />
          </div>
          <div class="form-group">
            <label for="name">Message</label>
            <textarea
              class="form-control"
              name="pesan"
              rows="10"
              required
            ></textarea>
          </div>
          <div class="my-3">
            <!-- <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button> -->

            <button type="submit" class="btn btn-primary btn-kirim">
              Submit
            </button>
            <button
              class="btn btn-primary btn-loading d-none"
              type="button"
              disabled
            >
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  height: 100%;
  width: 100%;
  padding-bottom: 100px;
}

.contact .info {
  padding: 15px;
  margin: 15px;

  background: #fff;
  width: 100%;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
}

.contact .info i {
  font-size: 20px;
  color: #149ddd;
  float: left;
  width: 44px;
  height: 44px;
  background: #dff3fc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}

.contact .info h4 {
  padding: 0 0 0 80px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #050d18;
}

.contact .info p {
  padding: 0 0 10px 80px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #173b6c;
}

.contact .info .email p {
  padding-top: 5px;
}

.contact .info .email:hover i,
.contact .info .address:hover i,
.contact .info .phone:hover i {
  background: #149ddd;
  color: #fff;
}

.contact .contact__form {
  width: 100%;
  margin: 15px;
  padding: 15px;
}

@media (min-width: 768px) {
  .contact {
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 834px) {
  .contact {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .contact h1 {
    margin-left: 8rem;
  }
  .contact .info {
    padding: 15px;
    margin: 35px 0px 0px 40px;

    background: #fff;
    width: 100%;
    max-height: 90%;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  }
  .contact .contact__form {
    width: 100%;
    margin: 35px 0px 0px 50px;
    padding: 15px;
  }
}
</style>
