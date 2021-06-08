let handler = async (m) => {
    let ayatkursi = JSON.stringify(global.ayatkursi)
    let json = JSON.parse(ayatkursi)
    let data = json.result.data.map((v, i) => `*Tafsir:* ${v.tafsir}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.translation}"_`)
    contoh = `*「 Ayat Kursi 」*\n\n`
    m.reply(contoh + data)
}
handler.help = ['ayatkursi']
handler.tags = ['islamic']
handler.command = /^(ayatkursi)$/i
handler.register = true

handler.fail = null
handler.limit = false

module.exports = handler

global.ayatkursi = {
  "result": {
    "data": {
      "tafsir": "Allah adalah Tuhan Yang Maha Esa, tidak ada tuhan selain Dia, dan hanya Dia yang berhak untuk disembah. Adapun tuhan-tuhan yang lain yang disembah oleh sebagian manusia dengan alasan yang tidak benar, memang banyak jumlahnya. Akan tetapi Tuhan yang sebenarnya hanyalah Allah. Hanya Dialah Yang hidup abadi, yang ada dengan sendiri-Nya, dan Dia pulalah yang selalu mengatur makhluk-Nya tanpa ada kelalaian sedikit pun.\n\nKemudian ditegaskan lagi bahwa Allah tidak pernah mengantuk. Orang yang berada dalam keadaan mengantuk tentu hilang kesadarannya, sehingga dia tidak akan dapat melakukan pekerjaannya dengan baik, padahal Allah swt senantiasa mengurus dan memelihara makhluk-Nya dengan baik, tidak pernah kehilangan kesadaran atau pun lalai.\n\nKarena Allah tidak pernah mengantuk, sudah tentu Dia tidak pernah tidur, karena mengantuk adalah permulaan dari proses tidur. Orang yang tidur lebih banyak kehilangan kesadaran daripada orang yang mengantuk.\n\nSifat Allah yang lain yang disebutkan dalam ayat ini ialah bahwa Dialah yang mempunyai kekuasaan dan yang memiliki apa yang ada di langit dan di bumi. Dialah yang mempunyai kekuatan dan kekuasaan yang tak terbatas, sehingga Dia dapat berbuat apa yang dikehendaki-Nya. Semuanya ada dalam kekuasaan-Nya, sehingga tidak ada satu pun dari makhluk-Nya termasuk para nabi dan para malaikat yang dapat memberikan pertolongan kecuali dengan izin-Nya, apalagi patung-patung yang oleh orang-orang kafir dianggap sebagai penolong mereka.\n\nYang dimaksud dengan \"pertolongan\" atau \"syafaat\" dalam ayat ini ialah pertolongan yang diberikan oleh para malaikat, nabi dan orang-orang saleh kepada umat manusia pada hari kiamat untuk mendapatkan keringanan atau kebebasan dari hukuman Allah. Syafaat itu akan terjadi atas izin Allah. Dalam hadis disebutkan :\n\nNabi Saw bersabda, \"¦Kemudian Allah berfirman, \"Para Malaikat memberikan syafaat, para Nabi memberikan syafaat, dan orang-orang mukmin juga memberikan syafaat. (Riwayat Ahmad dan Muslim dari Abu Sa'id al-Khudri)\n\nSifat Allah yang lain yang disebutkan dalam ayat ini ialah: bahwa Allah senantiasa mengetahui apa saja yang terjadi di hadapan dan di belakang makhluk-Nya, sedang mereka tidak mengetahui sesuatu pun dari ilmu Allah, melainkan sekadar apa yang dikehendaki-Nya untuk mereka ketahui. Kursi Allah mencakup langit dan bumi. Allah tidak merasa berat sedikit pun dalam memelihara makhluk-Nya yang berada di langit dan di bumi, dan di semua alam ciptaan-Nya. Allah Mahatinggi lagi Mahabesar.\n\nMereka tidak mengetahui ilmu Allah, kecuali apa yang telah dikehendaki-Nya untuk mereka ketahui. Dengan demikian, yang dapat diketahui oleh manusia hanyalah sekadar apa yang dapat dijangkau oleh pengetahuan yang telah dikaruniakan Allah kepada mereka, dan jumlahnya amat sedikit dibanding dengan ilmu-Nya yang luas. Hal ini ditegaskan Allah dalam firman-Nya:\n\n\"¦ Sedangkan kamu diberi pengetahuan hanya sedikit.\" (al-Isra'/17:85)",
      "translation": "Allah, tidak ada tuhan selain Dia. Yang Mahahidup, Yang terus menerus mengurus (makhluk-Nya), tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan apa yang ada di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang di hadapan mereka dan apa yang di belakang mereka, dan mereka tidak mengetahui sesuatu apa pun tentang ilmu-Nya melainkan apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi. Dan Dia tidak merasa berat memelihara keduanya, dan Dia Mahatinggi, Mahabesar.",
      "arabic": "اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ ەۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌۗ  لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِۗ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَۚ وَلَا يَـُٔوْدُهٗ حِفْظُهُمَاۚ وَهُوَ الْعَلِيُّ الْعَظِيْمُ",
      "latin": "Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim."
    }
  }
}