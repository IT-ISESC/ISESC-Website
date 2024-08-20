import { type News } from "$lib/components/ui/news/newsCard/newsCard"
import moment from "moment"

export const load = async (): Promise<{ news: News[] }> => {
  // TODO: Get news from db
  const news: Array<News> = [
    {
      id: 1,
      topic: 'Thailand New Gen Inventors Award 2025',
      tags: [ 
        {label: 'Innovation', props: { variant: 'innovation' }},
        {label: 'Competition', props: { variant: 'competition' }},
      ],
      dates: [{
        display: '20 June - 15 Aug 2024',
        startDate: '2024-06-20',
        endDate: '2024-08-15',
      }],
      imgSrc: './src/lib/assets/news/mock_news.png',
      newsDescription: `สำนักงานการวิจัยแห่งชาติ (วช.) กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม\n
ขอเชิญนักเรียน นิสิต นักศึกษา เสนอผลงานสิ่งประดิษฐ์เข้าร่วมประกวดโครงการ Thailand New Gen Inventors Award 2025 ( I-New Gen Award 2025) ระดับมัธยมศึกษา ระดับอาชีวศึกษา และระดับอุดมศึกษา ใน 5 กลุ่มเรื่องการประกวด ดังนี้
      1. การเกษตร
      2. อาหาร
      3. สุขภาพและการแพทย์
      4. พลังงาน วัสดุ และเคมีชีวภาพ
      5. การท่องเที่ยว
ผู้วิจัยสามารถเสนอผลงานเข้าร่วมประกวด ผ่านระบบข้อมูลสารสนเทศวิจัยและนวัตกรรมแห่งชาติ ที่เว็บไซต์ https://nriis.go.th`,
      links: [
        ['Register', 'https://nriis.go.th/www/?'],
        ['Facebook', 'https://www.facebook.com/newgeninventors'],
        ['More Information', 'https://sites.google.com/view/inventorday?fbclid=IwZXh0bgNhZW0CMTEAAR35WmRbSvn5CiSWUL3VT5okxNzbzVG2qNvvpbmhntCbKMLe9bqtR6iJE6g_aem_aFMg7UDStvKzSZlFObbv1A']
      ]
    },
    {
      id: 2,
      topic: 'BIMobject Green Design Competition 2024',
      tags: [ 
        {label: 'Innovation', props: { variant: 'innovation' }},
        {label: 'Competition', props: { variant: 'competition' }},
      ],
      dates: [{
        display: '18 Sep 2024 12:00 PM',
        startDate: '2024-09-18',
      }],
      imgSrc: './src/lib/assets/news/mock_news.png',
      newsDescription: `"Unlock the Future Design with Greenovation" หมายถึง การออกแบบที่คำนึงถึงความต้องการและความท้าทายในอนาคต ที่สามารถนำนวัตกรรมด้านสิ่งแวดล้อมมาสร้างสรรค์งานออกแบบได้อย่างไร้ขีดจำกัด โดยหนึ่งในนวัตกรรมด้านสิ่งแวดล้อมที่การประกวดให้ความสำคัญคือ CPAC 3D Printing Solution ซึ่งเป็นการพิมพ์สามมิติสำหรับการก่อสร้าง เพื่อสร้างสรรค์การทำงานที่ตอบกับความต้องการของผู้ออกแบบอย่างรอบด้าน ด้วยความพิเศษของการขึ้นรูปโครงสร้างด้วยเครื่องพิมพ์สามมิติ ทำให้ความสามารถออกแบบรูปทรงฟรีฟอร์ม หรือ Parametric Design ของงานมีจุดเด่นอันเป็นเอกลักษณ์ ลด Waste ของอุตสาหกรรมก่อสร้างด้วยความรวดเร็ว แม่นยำ ทำให้ได้ผลลัพธ์ของชิ้นงานที่ตรงกับแบบร่างและความต้องการผ่านระบบการทำงานในแบบดิจิทัล\n

คุณสมบัติ
- นักศึกษาที่กำลังศึกษาในระดับอุดมศึกษา ในระดับชั้นปริญญาตรี (ตั้งแต่ระดับชั้นปีที่ 2 เป็นต้นไป) และระดับอนุปริญญา (ในระดับประกาศนียบัตรวิชาชีพชั้นสูง)
ศึกษาในด้านที่เกี่ยวข้องกับ วิชาสถาปัตยกรรม วิศวกรรม บริหารการก่อสร้าง หรือสาขาวิชาอื่นๆ โดยเเนะนำให้แต่ละกลุ่มควรประกอบด้วยนักศึกษาสาขาวิชาสถาปัตยกรรมและวิศวกรรมโยธา
- สามารถส่งผลงานได้ทั้งแบบเดี่ยว หรือแบบกลุ่มไม่เกิน 5 คน โดยไม่จำกัดว่าจะต้องมาจากสถาบันเดียวกัน
- กำหนดให้มีอาจารย์ที่ปรึกษาในการเเข่งขัน\n

กำหนดการแข่งขัน
- เริ่มเปิดรับสมัครการแข่งขัน วันศุกร์ที่ 5 กรกฎาคม 2567
- BIM Training สําหรับผู้สนใจเข้าประกวด วันศุกร์ที่ 23 สิงหาคม 2567
- ปิดรับผลงานการแข่งขันรอบแรก วันพุธที่ 18 กันยายน 2567 เวลา 12.00 น.
- ประกาศผลผู้เข้ารอบสุดท้าย วันศุกร์ที่ 4 ตุลาคม 2567
- BIM Boot Camp วันที่ 16 - 18 ตุลาคม 2567
- ประกวดแบบรอบสุดท้าย เเละประกาศผู้ชนะเลิศ วันพฤหัสบดีที่ 7 พฤศจิกายน 2567`,
      links: [
        ['Test random', 'http://contestwar.com/contest/17580']
      ]
    },
    {
      id: 3,
      topic: 'SX2024 Hackathon',
      tags: [ 
        {label: 'Hackathon', props: { variant: 'hackathon' }},
        {label: 'Case', props: { variant: 'case' }},
        {label: 'Competition', props: { variant: 'competition'}}
      ],
      dates: [{
        display: '28 Aug 2024',
        startDate: '2024-08-28',
      }],
      imgSrc: './src/lib/assets/news/mock_news.png',
      newsDescription: `Calling all passionate young innovators aged 16-25 across ASEAN!  The Sustainability Expo 2024 (SX2024) – now in its fifth year – is thrilled to present the SX2024 Hackathon competition under the topic “Innovation for Climate Adaptation.”
This is your chance to shine and shape a sustainable future for our region with your passion, creativity, and climate-focused innovations. Join us to tackle climate challenges and make a lasting impact!  Together, we can create a resilient and thriving world.  Don't miss out on the opportunity to compete for a total prize value of 3,000 USD.\n

Eligibility
- A team of a minimum 3 people and a maximum of 4
- All members students aged between 16 - 25 years old 
- All team members are from ASEAN Countries
- Have at least 2 english-speaking members in the team
- Team has members who are interested in 3 areas: Business/Design/Technology\n

Important Dates
- Application & Idea Submission: August 28, 2024 at 11:59 P.M (GMT+7)
- Announcement of 15 teams qualified for the Case Pitching Round: September 5, 2024
- Competition Schedule and Performance Expectations (Online): September 10, 2024
-  Presentation at C asean @QSNCC Center, LM floor (Hybrid - qualified teams residing in Bangkok must present onsite): September 17, 2024
- Announcement of the 7 teams qualified for the Final Pitching Round: September 20, 2024
- Final Pitching Round (Onsite) In SX 2024 at Queen Sirikit National Convention Center
-> October 4-5, 2024: Hackathon activity at the 2nd floor meeting room
-> October 6, 2024: Final Pitching at Talk Stage, Hall 4, G floor
The organizer will cover either accommodation or travel expenses to attend the final pitching round, your group must choose one:
(1) Accommodation: Your group will receive 2 rooms per group for 2 nights.
(2) Travel expenses: Your group will receive USD 120 per group for 3 days of travel expenses."`,
      links: [
        ['Facebook', 'https://www.facebook.com/SX.SustainabilityExpo/photos/sx2024-hackathon-calling-all-passionate-young-innovators-aged-16-25-across-asean/783135480641895/']
      ]
    },
    {
      id: 4,
      topic: 'CASE 101',
      tags: [ 
        {label: 'Case', props: { variant: 'case' }},
        {label: 'Competition', props: { variant: 'competition' }},
        {label: 'Hackathon', props: { variant: 'hackathon'}},
      ],
      dates: [{
        display: 'Register: now - 16 Aug 2024\nUni Track Event Agenda: 31 Aug 2024',
        startDate: '2024-08-01',
        endDate: '2024-08-16',
      }, {
        display: '',
        startDate: '2024-08-31',
        endDate: '2024-09-01',
        time: '10.00 - 17.00',
        location: 'Chulapat 14',
      }, {
        display: '',
        startDate: '2024-09-20',
      }],
      imgSrc: './src/lib/assets/news/mock_news.png',
      newsDescription: `"🪄IOIC proudly presents How to crack a CASE101🚪
งานสำหรับมือใหม่ที่มีความสนใจในการแข่งเคส ไม่ค้องมีประสบการณ์ ขอแค่สนใจที่จะเริ่มต้นความรู้เกี่ยวกับการแข่งเคส ไม่ว่าจะด้าน research and analytical ด้าน Marketing ด้าน Financial หรือด้าน Presentation พวกเราพร้อมที่จะต้อนรับเสมอ และสามารถสมัครมาได้เลย!
🎓University Track กิจกรรมจัดขึ้นในวันที่ 31 สิงหาคม - 1 กันยายน
• เปิดรับสมัครตั้งแต่วันนี้ - 16 สิงหาคม 
• ประกาศผลผู้มีสิทธิ์เข้าร่วม 21 สิงหาคม
• ชำระมัดจำและกรอกฟอร์มยืนยันสิทธิ์ 21 - 25 สิงหาคม
• ประกาศรายชื่อสำรอง 26 สิงหาคม
• ชำระมัดจำและกรอกฟอร์มยืนยันสิทธิ์รายชื่อสำรอง 26 -28 สิงหาคม
🎒High school Track กิจกรรมจัดขึ้นในวันที่ 7 - 8 กันยายน 
• เปิดรับสมัครตั้งแต่วันนี้ - 16 สิงหาคม สมัครพร้อมชำระค่าใช้จ่ายในการเข้าร่วม
🚀หากมีข้อสงสัยหรืออยากติดตามข่าวสารและกิจกรรมของชมรมก่อนใคร
สามารถติดตามพวกเราได้ที่✨
💭Instagram : @ioic_chula "`,
      links: [
        ['Register', 'https://docs.google.com/forms/d/e/1FAIpQLSfhGdALelmv_oxXvMGGWAgc7M0IiZjZYf4PhGk5880dEThh5g/viewform'],
        ['Instagram', 'https://www.instagram.com/ioic_chula?igsh=MTE5c3BmN3RlNWZuNQ=='],
        ['Facebook', 'https://www.facebook.com/ioicchula/'],
      ]
    },
    {
      id: 5,
      topic: 'SX2024 Hackathon 2',
      tags: [ 
        {label: 'Hackathon', props: { variant: 'hackathon' }},
      ],
      dates: [{
        display: '28 Aug 2024',
        startDate: '2024-08-28',
        time: '12.00',
        location: 'somewhere'
      }],
      imgSrc: './src/lib/assets/news/mock_news.png',
      newsDescription: `Calling all passionate young innovators aged 16-25 across ASEAN!  The Sustainability Expo 2024 (SX2024) – now in its fifth year – is thrilled to present the SX2024 Hackathon competition under the topic “Innovation for Climate Adaptation.”
This is your chance to shine and shape a sustainable future for our region with your passion, creativity, and climate-focused innovations. Join us to tackle climate challenges and make a lasting impact!  Together, we can create a resilient and thriving world.  Don't miss out on the opportunity to compete for a total prize value of 3,000 USD.\n

Eligibility
- A team of a minimum 3 people and a maximum of 4
- All members students aged between 16 - 25 years old 
- All team members are from ASEAN Countries
- Have at least 2 english-speaking members in the team
- Team has members who are interested in 3 areas: Business/Design/Technology\n

Important Dates
- Application & Idea Submission: August 28, 2024 at 11:59 P.M (GMT+7)
- Announcement of 15 teams qualified for the Case Pitching Round: September 5, 2024
- Competition Schedule and Performance Expectations (Online): September 10, 2024
-  Presentation at C asean @QSNCC Center, LM floor (Hybrid - qualified teams residing in Bangkok must present onsite): September 17, 2024
- Announcement of the 7 teams qualified for the Final Pitching Round: September 20, 2024
- Final Pitching Round (Onsite) In SX 2024 at Queen Sirikit National Convention Center
-> October 4-5, 2024: Hackathon activity at the 2nd floor meeting room
-> October 6, 2024: Final Pitching at Talk Stage, Hall 4, G floor
The organizer will cover either accommodation or travel expenses to attend the final pitching round, your group must choose one:
(1) Accommodation: Your group will receive 2 rooms per group for 2 nights.
(2) Travel expenses: Your group will receive USD 120 per group for 3 days of travel expenses."`
    },
    {
      id: 6,
      topic: 'SX2024 Hackathon 3',
      tags: [ 
        {label: 'Hackathon', props: { variant: 'hackathon' }},
        {label: 'Case', props: { variant: 'case' }},
      ],
      dates: [{
        display: '28 Aug 2024',
        startDate: '2024-08-28',
      }],
      imgSrc: './src/lib/assets/news/mock_news.png',
      newsDescription: `Calling all passionate young innovators aged 16-25 across ASEAN!  The Sustainability Expo 2024 (SX2024) – now in its fifth year – is thrilled to present the SX2024 Hackathon competition under the topic “Innovation for Climate Adaptation.”
This is your chance to shine and shape a sustainable future for our region with your passion, creativity, and climate-focused innovations. Join us to tackle climate challenges and make a lasting impact!  Together, we can create a resilient and thriving world.  Don't miss out on the opportunity to compete for a total prize value of 3,000 USD.\n

Eligibility
- A team of a minimum 3 people and a maximum of 4
- All members students aged between 16 - 25 years old 
- All team members are from ASEAN Countries
- Have at least 2 english-speaking members in the team
- Team has members who are interested in 3 areas: Business/Design/Technology\n

Important Dates
- Application & Idea Submission: August 28, 2024 at 11:59 P.M (GMT+7)
- Announcement of 15 teams qualified for the Case Pitching Round: September 5, 2024
- Competition Schedule and Performance Expectations (Online): September 10, 2024
-  Presentation at C asean @QSNCC Center, LM floor (Hybrid - qualified teams residing in Bangkok must present onsite): September 17, 2024
- Announcement of the 7 teams qualified for the Final Pitching Round: September 20, 2024
- Final Pitching Round (Onsite) In SX 2024 at Queen Sirikit National Convention Center
-> October 4-5, 2024: Hackathon activity at the 2nd floor meeting room
-> October 6, 2024: Final Pitching at Talk Stage, Hall 4, G floor
The organizer will cover either accommodation or travel expenses to attend the final pitching round, your group must choose one:
(1) Accommodation: Your group will receive 2 rooms per group for 2 nights.
(2) Travel expenses: Your group will receive USD 120 per group for 3 days of travel expenses."`
    },
  ]
  return {
    news
  }
}