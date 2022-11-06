var handler = async m => m.reply(`
╭─「 Donasi 」
│ • DIGI (60109102984)
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/60109102984
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
