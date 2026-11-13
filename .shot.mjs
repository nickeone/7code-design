import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
for (const [name, vp] of [['desktop',{width:1366,height:900}],['mobile',{width:390,height:844}]]) {
  const p = await b.newPage({ viewport: vp });
  await p.goto('http://localhost:4173/resources/ai-automation-for-smes', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);
  const cookie = p.getByText('Reject non-essential'); if (await cookie.count()) await cookie.first().click();
  for (const [h, f] of [['How Does AI Automation Help SMEs Make Decisions?','decisions'],['How Does AI Automation Improve Collaboration Between Teams?','collab'],['How to Choose an AI Automation Partner','partner']]) {
    const el = p.getByRole('heading', { name: h }).first();
    await el.scrollIntoViewIfNeeded(); await p.evaluate(() => window.scrollBy(0, -110)); await p.waitForTimeout(400);
    await p.screenshot({ path: `/home/claude/aeo/preview-${f}-${name}.png`, fullPage: false });
  }
  await p.close();
}
await b.close();
