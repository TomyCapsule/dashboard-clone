const IP_ENV = process.env.IP_ENV;

if (!IP_ENV) {
    throw new Error(
      'Please define the IP_ENV environment variable inside .env.local'
    )
}

export async function getStats(){
    let getStats = await fetch(IP_ENV);
    getStats = await getStats.json();
    return getStats;
}