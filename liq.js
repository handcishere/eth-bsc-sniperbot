let checkLiq = async() => {
    const pairAddressx = await factory().getPair(getTokenAddress(), data.snipeToken);
    console.log(chalk.blue(`pairAddress: ${pairAddressx}`));
    if (pairAddressx !== null && pairAddressx !== undefined) {
        if (pairAddressx.toString().indexOf('0x0000000000000') > -1) {
            console.log(chalk.cyan(`Pair address ${pairAddressx} not detected. Auto restarting bot...`));
            return await run();
        }
    }
    const pairBNBvalue = await erc().balanceOf(pairAddressx);
    jmlBnb = ethers.utils.formatEther(pairBNBvalue);
    console.log(`Detected liquidity : ${jmlBnb}`);
    console.log('Going to buy token...');
    setTimeout(() => buyAction(), 3000);
}
