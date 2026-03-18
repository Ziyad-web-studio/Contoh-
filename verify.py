from playwright.sync_api import Page, expect, sync_playwright

def verify_feature(page: Page):
  page.goto("http://localhost:5173")
  page.wait_for_timeout(2000)

  # Check that hero section exists
  expect(page.get_by_role("heading", name="Selamat Datang di Ramen Giant Cijerah")).to_be_visible()
  page.wait_for_timeout(1000)

  # Check that default tab is visible
  expect(page.get_by_role("button", name="Reguler Ramen")).to_be_visible()

  # Click Dessert Tab to check tabbing and colors
  page.get_by_role("button", name="Dessert").click()
  page.wait_for_timeout(1000)

  # Click Dark Mode Toggle
  page.get_by_label("Toggle Dark Mode").click()
  page.wait_for_timeout(1000)

  page.screenshot(path="/home/jules/verification/verification.png")
  page.wait_for_timeout(1000)

if __name__ == "__main__":
  with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(record_video_dir="/home/jules/verification/video")
    page = context.new_page()
    try:
      verify_feature(page)
    finally:
      context.close()
      browser.close()
