const questions = [
    {
        id: 'q1',
        title: 'Q1. Tần suất sử dụng',
        subtitle: 'Bạn dùng AI bao lâu một lần?',
        type: 'radio',
        options: [
            { text: 'Vài lần/tuần, thử nghiệm linh tinh', score: 1 },
            { text: 'Hàng ngày, cho các tác vụ cụ thể', score: 2 },
            { text: 'Liên tục, tích hợp vào hầu hết công việc', score: 3 }
        ]
    },
    {
        id: 'q2',
        title: 'Q2. Chất lượng output',
        subtitle: 'Cho tác vụ bạn làm thường xuyên, trung bình phải chỉnh mấy lần mới ra output dùng được?',
        type: 'radio',
        options: [
            { text: '>5 lần', score: 1 },
            { text: '2-4 lần', score: 2 },
            { text: '0-1 lần', score: 3 }
        ]
    },
    {
        id: 'q3',
        title: 'Q3. Độ phức tạp tác vụ',
        subtitle: 'Tác vụ phức tạp nhất bạn đã hoàn thành với AI?',
        type: 'radio',
        options: [
            { text: 'Hỏi đáp đơn giản, dịch ngắn, giải thích khái niệm', score: 1 },
            { text: 'Email, tóm tắt, báo cáo, phân tích dữ liệu cơ bản, nghiên cứu', score: 2 },
            { text: 'Workflow nhiều bước / Tự động hóa / Xây dựng tool hoặc app', score: 3 }
        ]
    },
    {
        id: 'q4',
        title: 'Q4. Xử lý khi AI sai',
        subtitle: 'Khi AI trả kết quả sai hoặc không như ý, bạn thường làm gì?',
        type: 'radio',
        options: [
            { text: 'Bỏ cuộc, tự làm tay', score: 1 },
            { text: 'Thử lại vài lần, đổi cách hỏi', score: 2 },
            { text: 'Biết chính xác chỗ nào cần sửa trong prompt', score: 3 }
        ]
    },
    {
        id: 'q5',
        title: 'Q5. Số lượng tool',
        subtitle: 'Bạn đang dùng AI tool nào? (chọn tất cả)',
        type: 'checkbox',
        options: [
            'ChatGPT (Free / Plus / Pro)',
            'Claude (Free / Pro)',
            'Gemini (Free / Advanced)',
            'Copilot',
            'Perplexity',
            'NotebookLM',
            'Gamma',
            'Deepseek / Grok / Khác'
        ],
        scoring: (count) => count <= 2 ? 1 : count <= 4 ? 2 : 3
    },
    {
        id: 'q6',
        title: 'Q6. Truy cập tool trả phí',
        subtitle: 'Bạn có quyền truy cập AI tool trả phí không? (tự trả hoặc công ty trả)',
        type: 'radio',
        options: [
            { text: 'Không, chỉ dùng free', score: 1 },
            { text: 'Có 1 tool', score: 2 },
            { text: 'Có 2+ tools', score: 3 }
        ]
    },
    {
        id: 'q7',
        title: 'Q7. Kết nối tool (chaining)',
        subtitle: 'Bạn có kết nối output từ tool này làm input cho tool khác không? (Ví dụ: Research từ Perplexity → viết bài bằng Claude → tạo slide bằng Gamma)',
        type: 'radio',
        options: [
            { text: 'Không, dùng từng tool riêng lẻ', score: 1 },
            { text: 'Có, copy-paste thủ công giữa các tool', score: 2 },
            { text: 'Có workflow rõ ràng hoặc dùng automation (Make, Zapier...)', score: 3 },
            { text: 'Tôi dùng terminal, Cursor, Agentic AI... khi dùng AI', score: 3 }
        ]
    },
    {
        id: 'q8',
        title: 'Q8. Tư duy về AI',
        subtitle: 'Câu nào mô tả đúng nhất cách bạn nghĩ về AI?',
        type: 'radio',
        options: [
            { text: '"Không biết AI giúp gì được cho công việc tôi"', score: 1 },
            { text: '"AI giúp tôi làm nhanh hơn một số việc"', score: 2 },
            { text: '"AI thay đổi hoàn toàn cách tôi làm việc"', score: 3 }
        ]
    },
    {
        id: 'q9',
        title: 'Q9. Tính năng nâng cao',
        subtitle: 'Bạn đã DÙNG tính năng nâng cao nào? (chọn tất cả)',
        type: 'checkbox',
        options: [
            'Custom GPT / Gems / Claude Projects',
            'Memory (ChatGPT nhớ context dài hạn)',
            'Artifacts (Claude tạo code/doc riêng)',
            'Canvas (ChatGPT chỉnh sửa trực tiếp)',
            'Deep Research (Gemini / ChatGPT)',
            'Voice mode',
            'Vision (upload hình để AI phân tích)',
            'Code Interpreter / Advanced Data Analysis',
            'Claude Code / Codex (AI viết code trực tiếp)'
        ],
        scoring: (count) => count <= 1 ? 1 : count <= 4 ? 2 : 3
    },
    {
        id: 'q10',
        title: 'Q10. Tự xây công cụ',
        subtitle: 'Bạn đã bao giờ tự tạo ra một công cụ cho mình chưa?',
        type: 'radio',
        options: [
            { text: 'Chưa, tôi chỉ chat hỏi đáp bình thường', score: 1 },
            { text: 'Rồi, tôi dùng Custom GPT/Artifacts tạo quy trình mẫu để dùng lại', score: 2 },
            { text: 'Rồi, tôi mô tả để AI code xong một web app/tool/game nhỏ mà không cần biết lập trình', score: 3 }
        ]
    },
    {
        id: 'q11',
        title: 'Q11. Agent Mindset',
        subtitle: 'Cách bạn giao việc cho AI giống trường hợp nào nhất?',
        type: 'radio',
        options: [
            { text: 'Nhân viên tập sự: Tôi hỏi gì nó trả lời nấy', score: 1 },
            { text: 'Trợ lý: Tôi đưa quy trình cụ thể (Step 1, 2, 3), nó làm theo y hệt', score: 2 },
            { text: 'Quản lý cấp trung: Tôi đưa mục tiêu ("Tìm vé máy bay rẻ nhất"), nó tự biết phải tra ở đâu, so sánh và báo cáo lại', score: 3 }
        ]
    },
    {
        id: 'q12',
        title: 'Q12. Prompting Structure',
        subtitle: 'Một câu lệnh (prompt) tiêu chuẩn của bạn thường dài bao nhiêu?',
        type: 'radio',
        options: [
            { text: '1-2 dòng, viết tự nhiên như nói chuyện', score: 1 },
            { text: '1 đoạn văn, cố gắng mô tả chi tiết', score: 2 },
            { text: 'Có cấu trúc rõ ràng: Vai trò + Nhiệm vụ + Context + Output format + Ràng buộc', score: 3 }
        ]
    },
    {
        id: 'q13',
        title: 'Q13. Bạn dùng AI làm gì?',
        subtitle: 'Chọn tất cả tác vụ bạn đã từng dùng AI để làm (câu này không tính điểm)',
        type: 'checkbox',
        options: [
            'Viết / trả lời email',
            'Dịch (Anh ↔ Việt)',
            'Tóm tắt tài liệu / báo cáo dài',
            'Soạn báo cáo / đề xuất',
            'Phân tích dữ liệu (Excel, số liệu)',
            'Tạo slide / thuyết trình',
            'Brainstorm ý tưởng',
            'Viết content (LinkedIn, Facebook, blog)',
            'Nghiên cứu / tìm hiểu chủ đề mới',
            'Kiểm tra / chỉnh sửa văn bản (grammar, tone)',
            'Tạo hình ảnh',
            'Lên kế hoạch / to-do list'
        ],
        scoring: null
    }
];

let currentQuestion = 0;
let answers = {};
let userData = {};

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function renderQuestion(index) {
    const question = questions[index];
    const container = document.getElementById('quiz-container');

    let html = `
        <div class="question">
            <h3 class="question-title">${question.title}</h3>
            <p class="question-subtitle">${question.subtitle}</p>
    `;

    if (question.type === 'radio') {
        question.options.forEach((option, i) => {
            const checked = answers[question.id] === i ? 'checked' : '';
            const selected = answers[question.id] === i ? 'selected' : '';
            html += `
                <label class="option ${selected}" onclick="selectOption('${question.id}', ${i}, 'radio')">
                    <input type="radio" name="${question.id}" value="${i}" ${checked}>
                    ${option.text}
                </label>
            `;
        });
    } else if (question.type === 'checkbox') {
        html += '<div class="checkbox-group">';
        question.options.forEach((option, i) => {
            const checked = answers[question.id] && answers[question.id].includes(i) ? 'checked' : '';
            const selected = answers[question.id] && answers[question.id].includes(i) ? 'selected' : '';
            html += `
                <label class="option ${selected}" onclick="selectOption('${question.id}', ${i}, 'checkbox')">
                    <input type="checkbox" value="${i}" ${checked}>
                    ${option}
                </label>
            `;
        });
        html += '</div>';
    }

    html += '</div>';
    
    // Smooth transition pseudo-animation effect
    container.style.opacity = 0;
    setTimeout(() => {
        container.innerHTML = html;
        container.style.transition = 'opacity 0.3s ease';
        container.style.opacity = 1;
    }, 150);

    updateProgress();

    // Update button visibility
    document.getElementById('prevBtn').style.display = currentQuestion > 0 ? 'inline-flex' : 'none';
    document.getElementById('nextBtn').textContent = currentQuestion === questions.length - 1 ? 'Xem kết quả' : 'Tiếp theo';
}

function selectOption(questionId, optionIndex, type) {
    if (type === 'radio') {
        answers[questionId] = optionIndex;
        // Update UI
        document.querySelectorAll(`input[name="${questionId}"]`).forEach((input, i) => {
            input.checked = (i === optionIndex);
            input.parentElement.classList.toggle('selected', i === optionIndex);
        });

        // Auto-advance
        setTimeout(() => {
            nextQuestion();
        }, 400);

    } else if (type === 'checkbox') {
        if (!answers[questionId]) answers[questionId] = [];
        const index = answers[questionId].indexOf(optionIndex);

        if (index > -1) {
            answers[questionId].splice(index, 1);
        } else {
            answers[questionId].push(optionIndex);
        }

        // Only update UI inside current question
        const container = document.getElementById('quiz-container');
        container.querySelectorAll('.option').forEach(label => {
            const input = label.querySelector('input[type="checkbox"]');
            if (input) {
                const val = parseInt(input.value);
                if (answers[questionId].includes(val)) {
                    label.classList.add('selected');
                    input.checked = true;
                } else {
                    label.classList.remove('selected');
                    input.checked = false;
                }
            }
        });
    }
}

function startQuiz() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const job = document.getElementById('job').value.trim();

    let valid = true;

    if (!name) {
        document.getElementById('name-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    if (!email || !email.includes('@')) {
        document.getElementById('email-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    if (!valid) return;

    userData = { name, email, job };

    switchSection('section-info', 'section-quiz');
    renderQuestion(0);
}

function switchSection(fromId, toId) {
    const fromSec = document.getElementById(fromId);
    const toSec = document.getElementById(toId);
    
    fromSec.classList.remove('active');
    setTimeout(() => {
        toSec.classList.add('active');
    }, 400);
}

function nextQuestion() {
    const question = questions[currentQuestion];
    const isOptional = question.scoring === null;
    
    if (!isOptional && (answers[question.id] === undefined || answers[question.id] === null || (Array.isArray(answers[question.id]) && answers[question.id].length === 0))) {
        alert('Vui lòng chọn ít nhất một đáp án');
        return;
    }
    
    if (isOptional && !answers[question.id]) {
        answers[question.id] = [];
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion(currentQuestion);
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion(currentQuestion);
    }
}

function calculateScore() {
    let totalScore = 0;
    questions.forEach(question => {
        if (!question.scoring && question.scoring !== undefined) return;
        const answer = answers[question.id];

        if (question.type === 'radio') {
            totalScore += question.options[answer].score;
        } else if (question.type === 'checkbox' && question.scoring) {
            totalScore += question.scoring(answer.length);
        }
    });

    return totalScore;
}

function getTier(score) {
    if (score >= 12 && score <= 19) {
        return {
            name: 'AI Curious',
            class: 'tier-aware',
            description: `
                <p class="result-highlight">Bạn đang ở đây — cùng với rất nhiều dân văn phòng.</p>
                <p>Bạn đã nghe về AI, có thể đã thử vài lần. Nhưng chưa có thói quen dùng, chưa có use case cụ thể.</p>
                <p>Phần lớn nội dung AI chất lượng bằng tiếng Anh. Nếu không chủ động theo dõi, bạn chỉ biết những gì đã mainstream — tức là đã chậm 6-12 tháng.</p>
                <p>Không có gì sai. Nhưng có một khoảng cách mà bạn chưa thấy:</p>

                <table class="result-table">
                    <thead>
                        <tr>
                            <th>Bạn đang làm</th>
                            <th>AI User làm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Thỉnh thoảng hỏi AI khi tò mò</td>
                            <td>Dùng AI mỗi ngày cho công việc cụ thể</td>
                        </tr>
                        <tr>
                            <td>Copy output nguyên xi</td>
                            <td>Biết cách chỉnh sửa để output dùng được</td>
                        </tr>
                        <tr>
                            <td>"AI hay lắm, nhưng không biết dùng vào đâu"</td>
                            <td>"AI giúp tôi làm nhanh hơn mỗi ngày"</td>
                        </tr>
                    </tbody>
                </table>
                <p><strong>Tin tốt:</strong> Khoảng cách này rút ngắn được — nếu có người chỉ đúng hướng.</p>
            `
        };
    } else if (score >= 20 && score <= 24) {
        return {
            name: 'AI User',
            class: 'tier-user',
            description: `
                <p class="result-highlight">Bạn dùng AI hàng ngày — nhưng vẫn đang dùng như Google.</p>
                <p>Bạn biết ChatGPT, có thể đã dùng Custom GPT hoặc Projects. Nhưng cách bạn dùng AI chủ yếu là: hỏi một câu, nhận một đáp án, xong.</p>
                <p>Bạn chưa nghĩ về việc <strong>cách hỏi</strong> ảnh hưởng đến <strong>chất lượng câu trả lời</strong>.</p>

                <table class="result-table">
                    <thead>
                        <tr>
                            <th>Bạn đang làm</th>
                            <th>AI Practitioner làm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hỏi gì thì hỏi, không nghĩ về prompt</td>
                            <td>Cấu trúc prompt để ra output đúng ngay lần đầu</td>
                        </tr>
                        <tr>
                            <td>Một tool, một cách dùng, default settings</td>
                            <td>Dùng nhiều mode: text, voice, vision, documents</td>
                        </tr>
                        <tr>
                            <td>AI là convenience — tiện thì dùng</td>
                            <td>AI là work partner — không thể thiếu</td>
                        </tr>
                    </tbody>
                </table>
                <p class="result-question"><strong>Sự khác biệt cốt lõi:</strong> AI User dùng AI một cách tình cờ. AI Practitioner dùng AI một cách có chủ đích.</p>
            `
        };
    } else if (score >= 25 && score <= 28) {
        return {
            name: 'AI Practitioner',
            class: 'tier-practitioner',
            description: `
                <p class="result-highlight">Bạn dùng AI có chủ đích — và đang ở nhóm <strong>top 20%</strong> dân văn phòng.</p>
                <p>Bạn hiểu rằng cách hỏi quyết định chất lượng output. Bạn đã dùng các tính năng nâng cao, có thể đã customize setup riêng.</p>
                <p>Nhưng giữa "dùng tốt" và "không thể thiếu" vẫn còn một bước nhảy:</p>

                <table class="result-table">
                    <thead>
                        <tr>
                            <th>Bạn đang làm</th>
                            <th>AI Native làm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Prompt có cấu trúc, output tốt</td>
                            <td>Xây master prompt + hệ thống tái sử dụng</td>
                        </tr>
                        <tr>
                            <td>Dùng AI cho từng task riêng lẻ</td>
                            <td>AI tích hợp vào toàn bộ workflow</td>
                        </tr>
                        <tr>
                            <td>Biết dùng tính năng nâng cao</td>
                            <td>Mô tả để AI code ra tool riêng (vibe coding)</td>
                        </tr>
                    </tbody>
                </table>
                <p class="result-question"><strong>Câu hỏi:</strong> Bạn muốn dừng ở "dùng tốt" hay lên "lột xác"?</p>
            `
        };
    } else {
        return {
            name: 'AI Native',
            class: 'tier-native',
            description: `
                <p class="result-highlight">Nếu bạn thực sự ở đây — chúc mừng. Bạn thuộc nhóm <strong>top 5%</strong>.</p>
                <p>Nhóm này thường là developer, expat, hoặc người "sống" trên các cộng đồng AI và có khả năng tự mày mò cực tốt.</p>
                <p class="result-question">Cho mình hỏi:</p>

                <div class="result-quote">Bạn có thể <strong>dạy lại</strong> những gì bạn biết không?</div>

                <ul class="result-checklist">
                    <li><input type="checkbox" disabled> Giải thích được cho đồng nghiệp cách bạn dùng AI</li>
                    <li><input type="checkbox" disabled> Có workflow cụ thể mà người khác copy được</li>
                    <li><input type="checkbox" disabled> Đã từng giúp ai đó lên level</li>
                </ul>
                <p><strong>Nếu chưa tick hết:</strong> Kỹ năng cá nhân ≠ khả năng truyền đạt. Đó là level tiếp theo.</p>
            `
        };
    }
}

function showResults() {
    const score = calculateScore();
    const tier = getTier(score);

    switchSection('section-quiz', 'section-result');

    document.getElementById('finalScore').textContent = score;
    document.getElementById('tierBadge').innerHTML = `<div class="tier-badge ${tier.class}">${tier.name}</div>`;
    document.getElementById('tierDescription').innerHTML = tier.description;
    
    document.getElementById('progressBar').style.width = '100%';

    const isAdvanced = (tier.name === 'AI Practitioner' || tier.name === 'AI Native');
    const ctaDate = isAdvanced ? 'CN 8/2/2026 | 09:00-11:30 | Online' : 'T7 7/2/2026 | 09:00-11:30 | Online';
    document.getElementById('workshopDateCta').textContent = ctaDate;

    userData.score = score;
    userData.tier = tier.name;
    userData.answers = answers;
}

function registerWorkshop() {
    // Simulating API request to Google Sheets
    const btn = document.querySelector('button[onclick="registerWorkshop()"]');
    const originalText = btn.textContent;
    btn.textContent = 'Đang xử lý...';
    btn.disabled = true;

    // Simulate delay for aesthetics
    setTimeout(() => {
        switchSection('section-result', 'section-thankyou');
        
        const thankYouContent = getThankYouContent(userData.tier);
        document.getElementById('thankYouMessage').innerHTML = thankYouContent;
        
        window.scrollTo({top: 0, behavior: 'smooth'});
        btn.textContent = originalText;
        btn.disabled = false;
    }, 1500);
}

function getThankYouContent(tierName) {
    const isAdvanced = (tierName === 'AI Practitioner' || tierName === 'AI Native');
    const workshopDate = isAdvanced ? 'Chủ nhật 8/2/2026' : 'Thứ 7 ngày 7/2/2026';
    const workshopLabel = isAdvanced ? 'Workshop B (AI Practitioner & Native)' : 'Workshop A (AI Curious & User)';

    return `
        <h3 style="color: var(--primary); margin-bottom: 15px;">Workshop dành cho bạn: ${workshopLabel}</h3>
        <p style="font-size: 18px; font-weight: 600; margin: 15px 0;">${workshopDate} | 09:00-11:30 | Online</p>
        <p style="margin-top: 15px;">Dựa trên kết quả scorecard, mình đã chọn buổi workshop phù hợp nhất với cấp độ của bạn.</p>
        <p style="margin-top: 15px; color: var(--text-secondary);">Trong lúc chờ đợi, bạn hãy vào <strong>Tier Ranking Tool</strong> bên dưới để tự xếp hạng các tính năng AI theo ý mình. Tim sẽ chia sẻ góc nhìn của mình về bảng xếp hạng này <strong>Live trên Google Meet</strong>.</p>
        
        <div style="margin-top: 24px;">
            <a href="https://muriel1008.github.io/tier-ranking-tool/" target="_blank" class="btn btn-primary" style="text-decoration: none;">Mở Tier Ranking Tool</a>
        </div>
    `;
}
