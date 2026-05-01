import { WebcastPushConnection } from "tiktok-live-connector";

const username = "jwarafilter25k";

const tt = new WebcastPushConnection(username);

tt.connect()
  .then((state) => {
    console.log(`konek dengan roomID ${state.roomId}`);
  })
  .catch((err) => {
    console.error(`yah gagal konek: ${err}`);
  });

tt.on("chat", (data) => {
  console.log(`💬 ${data.nickname} bilang: ${data.comment}`);
});

tt.on("member", (data) => {
  console.log(`👋 ${data.nickname} bergabung nih!`);
});

tt.on("like", (data) => {
  console.log(`❤️ ${data.nickname} menyukai lipee ini`);
});

tt.on("gift", (data) => {
  console.log(`🎁 ${data.nickname} mengirim gipp: ${data.giftName}`);
});

tt.on("social", (data) => {
  console.log(`📢 ${data.nickname} melakukan interaksi sosial`);
});

