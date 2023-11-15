import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  
  let date = new Date().toDateString();
  export const NikeReceiptEmail = () => (
    <Html>
      <Head />
      <Preview>Get your order summary</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={track.container}>
            <Row>
              <Column>
                <Text style={global.paragraphWithBold}>Tracking Number</Text>
                <Text style={track.number}>1ZV218970300071628</Text>
              </Column>
              
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Section style={message}>
            <Heading style={global.heading}>Your Booking is Confirmed</Heading>
            <Text style={global.text}>
              Go to nearby CCL Station to take your Cycle. Use the link above to
              track its progress.
            </Text>
          </Section>
          <Hr style={global.hr} />
  
          <Hr style={global.hr} />
  
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Row style={{ display: "inline-flex", marginBottom: 40 }}>
              <Column style={{ width: "170px" }}>
                <Text style={global.paragraphWithBold}>Booking Number</Text>
                <Text style={track.number}>C0106373851</Text>
              </Column>
              <Column>
                <Text style={global.paragraphWithBold}>Booking Date</Text>
                <Text style={track.number}>{date}</Text>
              </Column>
            </Row>
            <Row>
              <Column align="center">
                <Link style={global.button}>Booking Status</Link>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
  
          <Hr style={global.hr} />
          <Section style={menu.container}>
            <Text style={menu.title}>Get Help</Text>
            <Row style={menu.content}>
              <Column style={{ width: "33%" }} colSpan={1}>
                <Link href="" style={menu.text}>
                  Booking Status
                </Link>
              </Column>
  
              <Column style={{ width: "33%" }} colSpan={1}>
                <Link href="/" style={menu.text}>
                  Cancel Your Booking
                </Link>
              </Column>
            </Row>
            <Row style={{ ...menu.content, paddingTop: "0" }}>
              <Column style={{ width: "66%" }} colSpan={2}>
                <Link href="/" style={menu.text}>
                  Contact Options
                </Link>
              </Column>
            </Row>
            <Hr style={global.hr} />
            <Row style={menu.tel}>
              <Column>
                <Row>
                  <Column style={{ width: "16px" }}></Column>
                  <Column>
                    <Text style={{ ...menu.text, marginBottom: "0" }}>
                      1-800-806-6453
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column>
                <Text
                  style={{
                    ...menu.text,
                    marginBottom: "0",
                  }}
                >
                  10 am - 10 pm PT
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Section style={paddingY}>
            <Text style={global.heading}>CCL.com</Text>
            <Row style={categories.container}>
              <Column align="center">
                <Link href="" style={categories.text}>
                  Men
                </Link>
              </Column>
              <Column align="center">
                <Link href="" style={categories.text}>
                  Women
                </Link>
              </Column>
              <Column align="center">
                <Link href="" style={categories.text}>
                  Kids
                </Link>
              </Column>
            </Row>
          </Section>
          <Hr style={{ ...global.hr, marginTop: "12px" }} />
          <Section style={paddingY}>
            <Row style={footer.policy}>
              <Column>
                <Text style={footer.text}>Web Version</Text>
              </Column>
              <Column>
                <Text style={footer.text}>Privacy Policy</Text>
              </Column>
            </Row>
            <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
              Please contact us if you have any questions. (If you reply to this
              email, we won't be able to see it.)
            </Text>
            <Text style={footer.text}>© 2022 CCl, Inc. All Rights Reserved.</Text>
            <Text style={footer.text}>
              CCL, INC. Police Station Road,Banglore.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default NikeReceiptEmail;
  
  const paddingX = {
    paddingLeft: "40px",
    paddingRight: "40px",
  };
  
  const paddingY = {
    paddingTop: "22px",
    paddingBottom: "22px",
  };
  
  const paragraph = {
    margin: "0",
    lineHeight: "2",
  };
  
  const global = {
    paddingX,
    paddingY,
    defaultPadding: {
      ...paddingX,
      ...paddingY,
    },
    paragraphWithBold: { ...paragraph, fontWeight: "bold" },
    heading: {
      fontSize: "32px",
      lineHeight: "1.3",
      fontWeight: "700",
      textAlign: "center",
      letterSpacing: "-1px",
    } as React.CSSProperties,
    text: {
      ...paragraph,
      color: "#747474",
      fontWeight: "500",
    },
    button: {
      border: "1px solid #929292",
      fontSize: "16px",
      textDecoration: "none",
      padding: "10px 0px",
      width: "220px",
      display: "block",
      textAlign: "center",
      fontWeight: 500,
      color: "#000",
    } as React.CSSProperties,
    hr: {
      borderColor: "#E5E5E5",
      margin: "0",
    },
  };
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "10px auto",
    width: "600px",
    border: "1px solid #E5E5E5",
  };
  
  const track = {
    container: {
      padding: "22px 40px",
      backgroundColor: "#F7F7F7",
    },
    number: {
      margin: "12px 0 0 0",
      fontWeight: 500,
      lineHeight: "1.4",
      color: "#6F6F6F",
    },
  };
  
  const message = {
    padding: "40px 74px",
    textAlign: "center",
  } as React.CSSProperties;
  
  const adressTitle = {
    ...paragraph,
    fontSize: "15px",
    fontWeight: "bold",
  };
  
  const recomendationsText = {
    margin: "0",
    fontSize: "15px",
    lineHeight: "1",
    paddingLeft: "10px",
    paddingRight: "10px",
  };
  
  const recomendations = {
    container: {
      padding: "20px 0",
    },
    product: {
      verticalAlign: "top",
      textAlign: "left" as const,
      paddingLeft: "2px",
      paddingRight: "2px",
    },
    title: { ...recomendationsText, paddingTop: "12px", fontWeight: "500" },
    text: {
      ...recomendationsText,
      paddingTop: "4px",
      color: "#747474",
    },
  };
  
  const menu = {
    container: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "20px",
      backgroundColor: "#F7F7F7",
    },
    content: {
      ...paddingY,
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    title: {
      paddingLeft: "20px",
      paddingRight: "20px",
      fontWeight: "bold",
    },
    text: {
      fontSize: "13.5px",
      marginTop: 0,
      fontWeight: 500,
      color: "#000",
    },
    tel: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "32px",
      paddingBottom: "22px",
    },
  };
  
  const categories = {
    container: {
      width: "370px",
      margin: "auto",
      paddingTop: "12px",
    },
    text: {
      fontWeight: "500",
      color: "#000",
    },
  };
  
  const footer = {
    policy: {
      width: "166px",
      margin: "auto",
    },
    text: {
      margin: "0",
      color: "#AFAFAF",
      fontSize: "13px",
      textAlign: "center",
    } as React.CSSProperties,
  };