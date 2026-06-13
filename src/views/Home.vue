<script setup>
// ---- Profile data (from GitHub) ----
const profile = {
  name: 'Cherry Citra Cahyaning',
  username: 'chrryctr1509',
  pronouns: 'he/him',
  avatar: '/images/cherry.png',
  bio: 'Fullstack Developer & AI Engineer • Building scalable web apps & intelligent systems • Laravel · React · Node.js · OpenAI • Open for freelance collaboration',
  location: 'Indonesia',
  githubUrl: 'https://github.com/chrryctr1509',
  email: 'chrryctr1509@gmail.com',
  followers: 8,
  following: 8
}
</script>

<template>
  <div class="gh-page">
    <div class="gh-container">
      <!-- Welcome notice -->
      <div class="gh-notice">
        <span class="gh-notice-icon">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>
        </span>
        <div class="gh-notice-body">
          <p class="gh-notice-title">Welcome to my profile</p>
          <p class="gh-notice-text">
            Fullstack Developer &amp; AI Engineer based in Indonesia — open for freelance collaboration.
          </p>
        </div>
        <a :href="profile.githubUrl" target="_blank" rel="noopener" class="gh-notice-btn">View on GitHub</a>
      </div>

      <div class="gh-grid">
        <!-- ===================== LEFT SIDEBAR ===================== -->
        <aside class="gh-sidebar">
          <div class="gh-avatar-wrap">
            <div class="gh-avatar">
              <img :src="profile.avatar" :alt="profile.name" />
            </div>
            <span class="gh-status-emoji">💬</span>
          </div>

          <div class="gh-identity">
            <h1 class="gh-name">{{ profile.name }}</h1>
            <p class="gh-username">{{ profile.username }} · {{ profile.pronouns }}</p>
          </div>

          <p class="gh-bio">{{ profile.bio }}</p>

          <a :href="profile.githubUrl" target="_blank" rel="noopener" class="gh-btn-follow">
            Follow
          </a>

          <div class="gh-follow-stats">
            <a :href="profile.githubUrl" target="_blank" rel="noopener" class="gh-follow-item">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"/></svg>
              <strong>{{ profile.followers }}</strong> followers
            </a>
            <span class="gh-dot">·</span>
            <a :href="profile.githubUrl" target="_blank" rel="noopener" class="gh-follow-item">
              <strong>{{ profile.following }}</strong> following
            </a>
          </div>

          <ul class="gh-meta">
            <li>
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"/></svg>
              <span>{{ profile.location }}</span>
            </li>
            <li>
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25Zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0Z"/></svg>
              <a :href="profile.githubUrl" target="_blank" rel="noopener">github.com/{{ profile.username }}</a>
            </li>
          </ul>

          <div class="gh-achievements">
            <h2 class="gh-sidebar-heading">Achievements</h2>
            <div class="gh-achievement-row">
              <span class="gh-badge-circle" title="Pull Shark">🦈</span>
              <span class="gh-badge-circle" title="YOLO">🎯</span>
              <span class="gh-badge-circle" title="Quickdraw">⚡</span>
              <span class="gh-badge-circle" title="Starstruck">⭐</span>
            </div>
          </div>
        </aside>

        <!-- ===================== RIGHT CONTENT ===================== -->
        <main class="gh-main">
          <!-- README card -->
          <section class="gh-readme">
            <div class="gh-readme-head">
              <span class="gh-readme-path">
                <span class="gh-readme-user">{{ profile.username }}</span> / <span class="gh-readme-file">README.md</span>
              </span>
              <a :href="profile.githubUrl" target="_blank" rel="noopener" class="gh-readme-edit" aria-label="Edit">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"/></svg>
              </a>
            </div>

            <div class="gh-readme-body markdown-body">
              <!-- ===== HEADER (centered) ===== -->
              <div class="md-center">
                <img class="md-img" src="https://capsule-render.vercel.app/api?type=waving&color=0:0F0C29,50:302B63,100:24243E&height=220&section=header&text=Cherry%20Citra%20Cahyaning&fontSize=46&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Fullstack%20Developer%20%E2%80%A2%20AI%20Engineer%20%E2%80%A2%20Software%20Architect&descAlignY=58&descSize=18&descColor=A78BFA" alt="Header banner" />

                <img class="md-img" src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=22&pause=1200&color=A78BFA&center=true&vCenter=true&width=800&lines=Building+Intelligent+Systems+%F0%9F%A4%96;Crafting+Scalable+Architectures+%F0%9F%8F%97%EF%B8%8F;Turning+Ideas+into+Products+%F0%9F%9A%80;Open+for+Freelance+Collaboration+%F0%9F%A4%9D" alt="Typing animation" />

                <div class="md-badge-row">
                  <img src="https://komarev.com/ghpvc/?username=chrryctr1509&style=flat-square&color=7C3AED&label=Profile+Views" alt="Profile Views" />
                  <img src="https://img.shields.io/github/followers/chrryctr1509?style=flat-square&color=059669&label=Followers" alt="Followers" />
                  <img src="https://img.shields.io/badge/Status-Open%20for%20Freelance-0EA5E9?style=flat-square" alt="Status" />
                  <img src="https://img.shields.io/badge/Location-Indonesia%20%F0%9F%87%AE%F0%9F%87%A9-F59E0B?style=flat-square" alt="Location" />
                </div>

                <div class="md-badge-row">
                  <a href="mailto:chrryctr1509@gmail.com">
                    <img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
                  </a>
                  <a :href="profile.githubUrl" target="_blank" rel="noopener">
                    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                  </a>
                </div>
              </div>

              <hr class="gh-divider" />

              <!-- ===== ABOUT ME ===== -->
              <div class="md-about">
                <div class="md-about-text">
                  <h2 class="gh-h2">👋 About Me</h2>
                  <p>
                    I'm a <strong>Fullstack Developer</strong> and <strong>AI Engineer</strong> based in Indonesia,
                    passionate about building scalable systems and intelligent applications. I specialize in
                    end-to-end product development — from architecting backends to deploying production AI pipelines.
                  </p>
                  <blockquote class="md-quote">"I don't just write code — I engineer solutions that scale."</blockquote>

                  <table class="md-table">
                    <thead>
                      <tr><th>Area</th><th>Expertise</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>🌐 <strong>Web</strong></td><td>Fullstack Development</td></tr>
                      <tr><td>🤖 <strong>AI/ML</strong></td><td>LLM Integration, AI Agents, Prompt Engineering</td></tr>
                      <tr><td>☁️ <strong>Cloud</strong></td><td>Docker, Linux, Nginx, CI/CD Pipelines</td></tr>
                      <tr><td>🔒 <strong>Security</strong></td><td>Auth systems, API security, best practices</td></tr>
                      <tr><td>🗄️ <strong>Databases</strong></td><td>MySQL, PostgreSQL, MongoDB, Redis</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="md-about-gif">
                  <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="Developer coding animation" />
                </div>
              </div>

              <hr class="gh-divider" />

              <!-- ===== TECH STACK ===== -->
              <details class="md-details" open>
                <summary><b>🛠️&nbsp; Tech Stack — click to expand</b></summary>
                <div class="md-details-body md-techstack">
                  <h3 class="gh-h3">💻 Languages</h3>
                  <img class="md-img" src="https://skillicons.dev/icons?i=js,ts,python,php,go,html,css&theme=dark" alt="Languages" />
                  <h3 class="gh-h3">🎨 Frontend</h3>
                  <img class="md-img" src="https://skillicons.dev/icons?i=react,nextjs,vue,tailwind,bootstrap&theme=dark" alt="Frontend" />
                  <h3 class="gh-h3">⚙️ Backend</h3>
                  <img class="md-img" src="https://skillicons.dev/icons?i=nodejs,express,laravel,flask,fastapi,go&theme=dark" alt="Backend" />
                  <h3 class="gh-h3">🗄️ Databases</h3>
                  <img class="md-img" src="https://skillicons.dev/icons?i=mysql,postgresql,mongodb,redis&theme=dark" alt="Databases" />
                  <h3 class="gh-h3">☁️ DevOps &amp; Tools</h3>
                  <img class="md-img" src="https://skillicons.dev/icons?i=docker,linux,nginx,git,github,postman,vscode&theme=dark" alt="DevOps" />
                  <h3 class="gh-h3">🤖 AI / ML Stack</h3>
                  <pre class="md-code">OpenAI API  •  Llama Models  •  Prompt Engineering  •  AI Agents  •  Workflow Automation</pre>
                </div>
              </details>

              <hr class="gh-divider" />

              <!-- ===== FEATURED PROJECTS ===== -->
              <details class="md-details">
                <summary><b>🚀&nbsp; Featured Projects — click to expand</b></summary>
                <div class="md-details-body">
                  <table class="md-table">
                    <thead>
                      <tr><th>#</th><th>Project</th><th>Description</th><th>Stack</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>🔧</td><td><strong>CRUD API User Laravel</strong></td><td>RESTful API with full JWT authentication &amp; role management</td><td><code>Laravel</code> <code>MySQL</code></td></tr>
                      <tr><td>📋</td><td><strong>API LSP</strong></td><td>Certification &amp; competency management platform</td><td><code>Laravel</code> <code>PHP</code></td></tr>
                      <tr><td>🤖</td><td><strong>AI Customer Service</strong></td><td>Intelligent chatbot with OpenAI integration &amp; context memory</td><td><code>Node.js</code> <code>OpenAI</code></td></tr>
                      <tr><td>📚</td><td><strong>React LMS</strong></td><td>Full-featured Learning Management System with progress tracking</td><td><code>React.js</code> <code>REST API</code></td></tr>
                      <tr><td>⚙️</td><td><strong>Automation Scripts</strong></td><td>Developer productivity tools &amp; workflow automation</td><td><code>Python</code> <code>Shell</code></td></tr>
                    </tbody>
                  </table>
                  <blockquote class="md-quote">💡 More projects available on my <a :href="profile.githubUrl" target="_blank" rel="noopener">GitHub profile</a></blockquote>
                </div>
              </details>

              <hr class="gh-divider" />

              <!-- ===== GITHUB STATISTICS ===== -->
              <details class="md-details">
                <summary><b>📊&nbsp; GitHub Statistics — click to expand</b></summary>
                <div class="md-details-body md-center">
                  <img class="md-img" src="https://streak-stats.demolab.com?user=chrryctr1509&theme=midnight-purple&hide_border=true&date_format=j%20M%5B%20Y%5D" alt="GitHub streak" />
                  <img class="md-img" src="https://github-readme-activity-graph.vercel.app/graph?username=chrryctr1509&theme=tokyo-night&hide_border=true&area=true&color=A78BFA&line=7C3AED&point=ffffff" alt="Activity graph" />
                </div>
              </details>

              <hr class="gh-divider" />

              <!-- ===== ACHIEVEMENTS ===== -->
              <details class="md-details">
                <summary><b>🏆&nbsp; GitHub Achievements — click to expand</b></summary>
                <div class="md-details-body md-center">
                  <img class="md-img" src="https://github-profile-trophy.vercel.app/?username=chrryctr1509&theme=algolia&no-frame=true&no-bg=true&margin-w=12&row=1&column=7" alt="Trophies" />
                </div>
              </details>

              <hr class="gh-divider" />

              <!-- ===== PROFESSIONAL VALUES ===== -->
              <details class="md-details">
                <summary><b>🎯&nbsp; Professional Values — click to expand</b></summary>
                <div class="md-details-body">
                  <pre class="md-code">┌─────────────────────────────────────────────────────────────────────┐
│                        HOW I BUILD SOFTWARE                         │
├────────────────────────────┬────────────────────────────────────────┤
│  🧹 Clean Code             │  Readable, documented, maintainable    │
│  🏗️ Scalable Architecture  │  Systems that grow without breaking    │
│  ⚡ Performance First      │  Fast, efficient, resource-conscious   │
│  🔒 Security by Design     │  Defense-in-depth from day one         │
│  📚 Continuous Learning    │  Always current with best practices    │
│  🤝 Team Collaboration     │  Clear communication, shared ownership │
└────────────────────────────┴────────────────────────────────────────┘</pre>
                </div>
              </details>

              <hr class="gh-divider" />

              <!-- ===== FOOTER ===== -->
              <div class="md-center">
                <h3 class="gh-h3">📬 Let's Build Something Together</h3>
                <div class="md-badge-row">
                  <a href="mailto:chrryctr1509@gmail.com">
                    <img src="https://img.shields.io/badge/Send%20Email-7C3AED?style=for-the-badge&logo=gmail&logoColor=white" alt="Send Email" />
                  </a>
                  <a :href="profile.githubUrl" target="_blank" rel="noopener">
                    <img src="https://img.shields.io/badge/View%20GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="View GitHub" />
                  </a>
                </div>
                <p class="md-muted"><em>Available for freelance projects and technical collaborations.</em></p>
                <img class="md-img" src="https://capsule-render.vercel.app/api?type=waving&color=0:24243E,50:302B63,100:0F0C29&height=100&section=footer&fontColor=ffffff" alt="Footer" />
              </div>
            </div>
          </section>

          <p class="gh-footnote">Built with Vue 3 · Inspired by GitHub Dark</p>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gh-page {
  min-height: 100vh;
  background: #0d1117;
  color: #e6edf3;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, 'Noto Sans', Helvetica, Arial, sans-serif;
  padding: 24px 16px 64px;
  display: flex;
  justify-content: center;
}
.gh-container {
  width: 100%;
  max-width: 1012px;
  margin: 0 auto;
}

/* Notice */
.gh-notice {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 24px;
}
.gh-notice-icon { color: #58a6ff; display: flex; padding-top: 1px; flex-shrink: 0; }
.gh-notice-body { flex: 1; min-width: 0; }
.gh-notice-title { font-weight: 600; font-size: 14px; color: #e6edf3; }
.gh-notice-text { font-size: 14px; color: #8b949e; margin-top: 2px; }
.gh-notice-btn {
  flex-shrink: 0;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 600;
  color: #e6edf3;
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 6px;
  text-decoration: none;
  white-space: nowrap;
}
.gh-notice-btn:hover { background: #30363d; border-color: #8b949e; }

/* Grid layout */
.gh-grid {
  display: grid;
  grid-template-columns: 296px minmax(0, 1fr);
  gap: 24px;
  align-items: start;
}

/* ============ SIDEBAR ============ */
.gh-sidebar { position: sticky; top: 24px; }

.gh-avatar-wrap { position: relative; width: 100%; }
.gh-avatar {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  background: radial-gradient(circle at 50% 35%, #c0392b 0%, #a02d22 100%);
  border: 1px solid #30363d;
}
.gh-avatar img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
.gh-status-emoji {
  position: absolute;
  right: 18px;
  bottom: 18px;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background: #161b22;
  border: 2px solid #f0883e;
  border-radius: 50%;
  font-size: 18px;
}

.gh-identity { margin-top: 16px; }
.gh-name { font-size: 24px; font-weight: 600; line-height: 1.25; color: #e6edf3; }
.gh-username { font-size: 20px; font-weight: 300; color: #8b949e; margin-top: 0; }

.gh-bio { font-size: 16px; color: #e6edf3; margin-top: 16px; line-height: 1.5; }

.gh-btn-follow {
  display: block;
  text-align: center;
  width: 100%;
  margin-top: 16px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #e6edf3;
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 6px;
  text-decoration: none;
  transition: background .15s ease, border-color .15s ease;
}
.gh-btn-follow:hover { background: #30363d; border-color: #8b949e; }

.gh-follow-stats { display: flex; align-items: center; gap: 8px; margin-top: 16px; font-size: 14px; }
.gh-follow-item { display: inline-flex; align-items: center; gap: 4px; color: #8b949e; text-decoration: none; }
.gh-follow-item:hover { color: #58a6ff; }
.gh-follow-item strong { color: #e6edf3; font-weight: 600; }
.gh-follow-item:hover strong { color: #58a6ff; }
.gh-dot { color: #8b949e; }

.gh-meta { list-style: none; margin-top: 16px; display: flex; flex-direction: column; gap: 8px; padding: 0; }
.gh-meta li { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #e6edf3; }
.gh-meta svg { color: #8b949e; flex-shrink: 0; }
.gh-meta a { color: #e6edf3; text-decoration: none; }
.gh-meta a:hover { color: #58a6ff; }

.gh-achievements { margin-top: 24px; padding-top: 24px; border-top: 1px solid #21262d; }
.gh-sidebar-heading { font-size: 14px; font-weight: 600; color: #e6edf3; margin-bottom: 8px; }
.gh-achievement-row { display: flex; gap: 4px; }
.gh-badge-circle {
  width: 44px; height: 44px;
  display: grid; place-items: center;
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 50%;
  font-size: 20px;
}

/* ============ MAIN ============ */
.gh-readme {
  border: 1px solid #30363d;
  border-radius: 6px;
  background: #0d1117;
  overflow: hidden;
}
.gh-readme-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid #30363d;
  font-size: 14px;
}
.gh-readme-path { color: #8b949e; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
.gh-readme-user { color: #8b949e; }
.gh-readme-file { color: #e6edf3; }
.gh-readme-edit { color: #8b949e; display: flex; padding: 4px; border-radius: 6px; }
.gh-readme-edit:hover { color: #e6edf3; background: #21262d; }
.gh-readme-body { padding: 24px; }

.gh-divider { border: none; border-top: 1px solid #21262d; margin: 28px 0; }

.gh-h2 { font-size: 22px; font-weight: 600; color: #e6edf3; margin-bottom: 14px; }
.gh-h3 { font-size: 18px; font-weight: 600; color: #e6edf3; margin: 18px 0 12px; }

/* ===== Markdown-style body ===== */
.markdown-body { font-size: 15px; color: #c9d1d9; line-height: 1.6; }
.markdown-body strong { color: #e6edf3; }
.markdown-body p { margin: 0 0 12px; }
.markdown-body a { color: #58a6ff; text-decoration: none; }
.markdown-body a:hover { text-decoration: underline; }

.md-center { text-align: center; }
.md-img { max-width: 100%; height: auto; border-radius: 6px; margin: 8px auto; display: inline-block; }

/* Tech Stack: left-aligned */
.md-techstack { text-align: left; }
.md-techstack .md-img { display: block; margin: 8px 0; }
.md-techstack .gh-h3 { text-align: left; }
.md-techstack .md-code { white-space: pre-wrap; }
.md-badge-row { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; align-items: center; margin: 10px 0; }
.md-badge-row img { height: auto; }
.md-muted { color: #8b949e; }

/* About: 2-col text + gif */
.md-about { display: grid; grid-template-columns: 55% 45%; gap: 20px; align-items: center; }
.md-about-text { min-width: 0; }
.md-about-gif { text-align: center; }
.md-about-gif img { max-width: 100%; border-radius: 8px; }

.md-quote {
  margin: 12px 0;
  padding: 8px 16px;
  border-left: 4px solid #30363d;
  color: #8b949e;
  font-style: italic;
}
.md-quote a { font-style: normal; }

/* Tables */
.md-table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 14px; }
.md-table th, .md-table td { border: 1px solid #30363d; padding: 8px 12px; text-align: left; }
.md-table th { background: #161b22; color: #e6edf3; font-weight: 600; }
.md-table tr:nth-child(2n) td { background: #0f141b; }
.md-table code {
  background: #21262d; color: #e6edf3;
  padding: 2px 6px; border-radius: 4px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12px;
}

/* Details / collapsibles */
.md-details {
  border: 1px solid #30363d;
  border-radius: 6px;
  background: #0d1117;
  overflow: hidden;
}
.md-details > summary {
  list-style: none;
  cursor: pointer;
  padding: 12px 16px;
  font-size: 15px;
  color: #e6edf3;
  background: #161b22;
  user-select: none;
}
.md-details > summary::-webkit-details-marker { display: none; }
.md-details > summary::before { content: '▶'; color: #8b949e; font-size: 11px; margin-right: 8px; display: inline-block; transition: transform .15s ease; }
.md-details[open] > summary::before { transform: rotate(90deg); }
.md-details > summary:hover { background: #1c2230; }
.md-details-body { padding: 16px; border-top: 1px solid #30363d; }

/* Code / ascii blocks */
.md-code {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 14px 16px;
  margin: 12px 0;
  overflow-x: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, 'JetBrains Mono', monospace;
  font-size: 12.5px;
  line-height: 1.45;
  color: #c9d1d9;
  white-space: pre;
}

.gh-footnote { text-align: center; color: #6e7681; font-size: 12px; margin-top: 24px; }

/* ============ RESPONSIVE ============ */
@media (max-width: 1012px) {
  .gh-grid { grid-template-columns: 1fr; }
  .gh-sidebar { position: static; }
  .gh-avatar-wrap { width: 200px; }
  .gh-readme-body { padding: 16px; }
  .md-about { grid-template-columns: 1fr; }
  .md-about-gif { margin-top: 8px; }
  .gh-notice-btn { display: none; }
}
</style>


