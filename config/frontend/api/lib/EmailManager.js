const EmailManager = {
  getEmailFooter: function () {
    return `<!-- START FOOTER -->
    <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
      <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
        <tr>
          <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding: 0 30px 10px 30px; padding-top: 10px; font-size: 12px; color: #999999;">
            <span class="apple-link" style="color: #999999; font-size: 12px;">${process.env.NAME} appreciates the support of its donors, subscribers, sponsors and volunteers</span>
          </td>
        </tr>
      </table>
    </div>
    <!-- END FOOTER -->

  <!-- END CENTERED WHITE CONTAINER -->
      </div>
        </td>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
      </tr>
    </table>
  </body>
</html>`;
  },
  getEmailHeader: function () {
    return `
    <!doctype html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>${process.env.NAME} email</title>
      <style>
      /* -------------------------------------
          INLINED WITH htmlemail.io/inline
      ------------------------------------- */
      /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
      @media only screen and (max-width: 620px) {
        table[class=body] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
        table[class=body] p,
              table[class=body] ul,
              table[class=body] ol,
              table[class=body] td,
              table[class=body] span,
              table[class=body] a {
          font-size: 16px !important;
        }
        table[class=body] .wrapper,
              table[class=body] .article {
          padding: 10px !important;
        }
        table[class=body] .content {
          padding: 0 !important;
        }
        table[class=body] .container {
          padding: 0 !important;
          width: 100% !important;
        }
        table[class=body] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
        table[class=body] .btn table {
          width: 100% !important;
        }
        table[class=body] .btn a {
          width: 100% !important;
        }
        table[class=body] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }
  
      /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
      ------------------------------------- */
      @media all {
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
              .ExternalClass p,
              .ExternalClass span,
              .ExternalClass font,
              .ExternalClass td,
              .ExternalClass div {
          line-height: 100%;
        }
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }
        .btn-primary table td:hover {
          background-color: #34495e !important;
        }
        .btn-primary a:hover {
          background-color: #34495e !important;
          border-color: #34495e !important;
        }
      }
      </style>
    </head>
    <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">`;
  },
  getDonateUserEmailHtml: function (args) {
    return (
      this.getEmailHeader() +
      `
      <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
        <tr>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
          <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
            <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
  
              <!-- START CENTERED WHITE CONTAINER -->
              <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Thank you for your support</span>
              <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
  
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                      <tr>
                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi ${args.firstName},</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Thank you for your pledge of $${args.donationAmount}. To complete your donation, please follow these instructions:</p>
                          <br>
                          <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>Internet banking:</strong> ${process.env.NAME} a/c BANK_ACCOUNT_NO with your name in the particulars box.</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Or alternatively, post the completed form, with cheque to: Subscriptions, ${process.env.NAME}, ${process.env.POSTAL_ADDRESS}</p>
                          <br>
                          <br>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 25px;">We appreciate your on-going support,</p>
                          <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">The ${process.env.NAME} Team</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
  
              <!-- END MAIN CONTENT AREA -->
              </table>` +
      this.getEmailFooter()
    );
  },
  getDonateOrgEmailHtml: function (args) {
    return (
      this.getEmailHeader() +
      `
      <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
        <tr>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
          <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
            <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
  
              <!-- START CENTERED WHITE CONTAINER -->
              <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;"></span>
              <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
  
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                  <tr>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                      <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">A new pledge has been submitted for $${args.donationAmount}:</p>
                      <br>
                      <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>First name:</strong></p>
                          </td>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">${args.firstName}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>Last name:</strong></p>
                          </td>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">${args.lastName}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>Donation amount (NZD):</strong></p>
                          </td>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">$${args.donationAmount}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>Email:</strong></p>
                          </td>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">${args.email}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>Phone:</strong></p>
                          </td>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">${args.phone}</p>
                          </td>
                        </tr>
                      </table>
                      <br>
                      <br>
                      <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">${args.firstName} has been sent an email with payment instructions and this data has been written to spreadsheet. Please reply to the email address above, not this email.</p>
                    </td>
                  </tr>
                </table>
                  </td>
                </tr>
  
              <!-- END MAIN CONTENT AREA -->
              </table>` +
      this.getEmailFooter()
    );
  },
  getSubscribeUserEmailHtml: function (args) {
    return (
      this.getEmailHeader() +
      `
      <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
        <tr>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
          <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
            <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
  
              <!-- START CENTERED WHITE CONTAINER -->
              <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Thank you for your support</span>
              <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
  
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                      <tr>
                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi ${
                            args.firstName
                          },</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Thank you for your support. Your subscription is currently pending payment.</p>
                          <br>
                          <table>
                            <tr>
                                <td><p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">Subscription fee: </p></td>
                                <td><p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">$${
                                  args.subscriptionFee
                                } (${args.subscriptionType})</p></td>
                            </tr>
                            <tr>
                                <td><p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">Donation:</p></td>
                                <td><p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">$${
                                  args.donationAmount
                                }</p></td>
                            </tr>
                            <tr>
                            <td><p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>Total:</strong></p></td>
                            <td><p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong> $${
                              parseInt(args.subscriptionFee) +
                              parseInt(args.donationAmount)
                            }</strong></p></td>
                            </tr>
                          </table>
                          <br>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">To complete your subscription, please follow these instructions:</p>
                          <br>
                          <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>Internet banking:</strong> ${process.env.NAME} a/c ${process.env.BANK_ACCOUNT_NO} with your name in the particulars box.</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Or alternatively, post the completed form, with cheque to: Subscriptions, ${process.env.NAME}, ${process.env.POSTAL_ADDRESS}</p>
                          <br>
                          <br>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 25px;">We appreciate your on-going support,</p>
                          <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">The ${process.env.NAME} Team</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
  
              <!-- END MAIN CONTENT AREA -->
              </table>` +
      this.getEmailFooter()
    );
  },
  getSubscribeOrgEmailHtml: function (args) {
    return (
      this.getEmailHeader() +
      `
      <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
        <tr>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
          <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
            <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
  
              <!-- START CENTERED WHITE CONTAINER -->
              <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;"></span>
              <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
  
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                  <tr>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                      <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">A new subscription has been submitted:</p>
                      <br>
                          <table>
                            <tr>
                                <td><p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">Subscription fee: </p></td>
                                <td><p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">$${
                                  args.subscriptionFee
                                } (${args.subscriptionType})</p></td>
                            </tr>
                            <tr>
                                <td><p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">Donation:</p></td>
                                <td><p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">$${
                                  args.donationAmount
                                }</p></td>
                            </tr>
                            <tr>
                            <td><p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>Total:</strong></p></td>
                            <td><p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong> $${
                              parseInt(args.subscriptionFee) +
                              parseInt(args.donationAmount)
                            }</strong></p></td>
                            </tr>
                          </table>
                          <br>
                          <br>
                      <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>First name:</strong></p>
                          </td>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">${
                              args.firstName
                            }</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>Last name:</strong></p>
                          </td>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">${
                              args.lastName
                            }</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>Email:</strong></p>
                          </td>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">${
                              args.email
                            }</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>Phone:</strong></p>
                          </td>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">${
                              args.phone
                            }</p>
                          </td>
                        </tr>
                      </table>
                      <br>
                      <br>
                      <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">${
                        args.firstName
                      } has been sent an email with payment instructions and this data has been written to spreadsheet. Please reply to the email address above, not this email.</p>
                    </td>
                  </tr>
                </table>
                  </td>
                </tr>
  
              <!-- END MAIN CONTENT AREA -->
              </table>` +
      this.getEmailFooter()
    );
  },
  getContactEmailHtml: function (args) {
    return (
      this.getEmailHeader() +
      `
      <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
        <tr>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
          <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
            <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
  
              <!-- START CENTERED WHITE CONTAINER -->
              <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;"></span>
              <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
  
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                  <tr>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                      <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">A new enquiry has been submitted through the WCS contact form:</p>
                      <br>
                      <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>Name:</strong></p>
                          </td>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">${args.name}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>Email:</strong></p>
                          </td>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                            <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;">${args.email}</p>
                          </td>
                        </tr>   
                      </table>
                      <p style="font-family: sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>Message</strong></p>
                      <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">${args.message}</p>
                      <br>
                      <br>
                      <p style="font-family: sans-serif; font-size: 12px; font-weight: normal; margin: 0; margin-bottom: 15px;">Please reply to the email address above, not this email.</p>
                    </td>
                  </tr>
                </table>
                  </td>
                </tr>
  
              <!-- END MAIN CONTENT AREA -->
              </table>` +
      this.getEmailFooter()
    );
  },
};

module.exports = EmailManager;
