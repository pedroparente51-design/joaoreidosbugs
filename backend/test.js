const { PrismaClient } = require('@prisma/client'); 
const prisma = new PrismaClient(); 

async function test() { 
  try { 
    await prisma.$transaction([ 
      prisma.dailySheet.deleteMany({ where: { userId: 1 } }), 
      prisma.cpaSheet.deleteMany({ where: { userId: 1 } }), 
      prisma.expense.deleteMany({ where: { userId: 1 } }), 
      prisma.goal.deleteMany({ where: { userId: 1 } }), 
      prisma.statistic.deleteMany({ where: { userId: 1 } }), 
      prisma.activity.deleteMany({ where: { userId: 1 } }) 
    ]); 
    console.log('Success'); 
  } catch(e) { 
    console.error('Error:', e.message); 
  } finally { 
    await prisma.$disconnect(); 
  } 
} 
test();
