const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID ||| 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xiH7mIilVdNaCgXBUBb1NTUxGCRpEgCSp2+e9TtN11+mHOmR6eUglZe2WttfcbyAmmyEY1GLyBosQXyFCzZHWBwABoVZqiErRAAhkEA9DX/XKTOSNX9cacO82VseDajrHRSyHxCTcdIa6jrazzzFi/gkcLFNU2w/FvAC1papCDFsvzKzn2c2EzdCgXzs/nEe9Tf93xOOQrs1moXd1X8GgQIS5xvtOLPTqhEmY2qmcQl9+jf51VvsGClORy2k+MwpuN2Ma4sFxyzrp8chcn3jW0FNcL8j36peN174fOaaJbgdVfzQOzrROrdxzSyrlwdRrvvKW0pld7SJ70Kd7lKDETlDPM6m/rbs+mdTotzMTSh7rm4EUpWOO6TPSeG0PxgLOh4OGj7cTj3feIr7fLe//Mpb2dFty8o3QjbHfLpG4cEh/fOHnvUIt4NLGD6CvxWfmZleP/0X1sZGzYEzmn7XfFfeAxnw8DQkohDW/Yjxy4rJN9e7Mqxu736K+qsh4f2n0lmk3Ujr9a7+P8uLVx5Chhptwjx9RCLixw2+d/0oesKn/Hck4rY3vf+vYSy7fTxJ8v+ncX73Yi7xYORfeMN4fzfZl1zpqzn128Dr0aBb9g0a5z07pqxxRcTO9QN0vxdOanCUl6Y+36+v6iI6rNBAyERwuUaIcpKyHDJG/2RFFoAZhcAhSXiL3LCwIuFvULHgXdRTS6Wta17M11KovsbCnFphNN957fOyTjeT96BS1QlCRGlKJkgikjZe0iSuEOUTD4868WyNGNPY1ryklCC6S4pCzKqyIjMPl09fMQxjGpchbUeTxsFqgEA/7nNmIM5zva6FjlsIz3+IKGe8goGKQwo+jRAgm64Bg1eMA+nvSFvqL+rvZyEZem/zem14bynuTPX+J+P423SvyCYgm9dNJ+/NJP5M5Lomx7HQHCdAs7oAXwR880d35poaDM6PQQbWw/HO2dhBjn7KKf1Ikbm+82PLVHJUrAgJUVaoEtjI9VEZIjyn+DW7SZI1y23fV9RMVwHcva6GK5Cpfhr7hPT8Hg7eecGpKkwVO6ou0rxgi0wOk9grh5ucwrktCT+pIsDGTxD/rj2ugIi+JHjlgD+6F5cyFBDOKMggEYepNpN1P9XbU0L/56rQaqaqtqk4NPjz7D/gzTxE389W1xq2p5PuvN5lM52yJsupmZyw4f7WMx6/Li9KCF5r+BNHPzzuyJGiRqJ1ycDyReBisO35fjnjqRuIVk2fU9qEKNOgdypHVAJyt6y2Abcxs789KaiOcuXIqjfs0bs3QayVPOFDT/tan2zMrXYszsWKLbzofDabmfeLIeLM1qyJlaIVK3upt7MjaiOMlR95C4W52081NsqTJ/zcLLQmdpFkjx2omNYTX3ZxtbDYuuoqrPNnwfA9nH+MXvDfL2kawUo/dplsPGof/w5mvG+UfrC8THePxFjrT5fRKN3UW8pVUUcnc+rDZLieCRFVhcoBjmyisQ8w7kGtXg8firBYoMspSUJzAAME9KghPQAhmkTP3ZpiE+IcrgqQCDhnK3L/Gi1AKnWi2KgEH22d1AbT6bBODxD7yIfvP5BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "kelly-tec",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "31738351",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

