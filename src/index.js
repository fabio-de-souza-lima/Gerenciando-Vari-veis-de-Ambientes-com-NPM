import connectToDatabase from "./database/data.js";

async function main( ) {
    await connectToDatabase("fabio","jesus");
   // await connectToDatabase("gloria", "jesus");
    
}

main();