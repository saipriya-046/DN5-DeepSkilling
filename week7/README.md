# Week 7 — DevOps, Docker, Cloud, GenAI Fundamentals

Per the Deep Skilling Handbook, these are **awareness-level** modules —
there are no mandatory hands-on coding labs for them (unlike React/Angular/
Git, which had actual HOL exercises). Each module is: read the linked
articles, take the short quiz. Budget roughly 1 week total for all four.

## What to actually do this week

### 1. DevOps & CI/CD — see `devops/README.md`
Full write-up: DevOps concepts, CI vs CD, a stage-by-stage walkthrough of
your actual `week6/cicd-example` pipeline, deployment strategies
(rolling/blue-green/canary), and what to screenshot/submit as your
practical artifact.

### 2. Docker (practical artifact included below)
- `docker-example/Dockerfile.react` — multi-stage build for any of your
  React apps (small final image, no node_modules shipped)
- `docker-example/Dockerfile.angular` — same pattern for the Angular
  Student Course Portal
- `docker-example/docker-compose.yml` — runs both together

**To actually run it:**
```
cd docker-example
# copy this Dockerfile into the root of the React/Angular project you want to containerize
docker build -f Dockerfile.react -t my-react-app .
docker run -p 3000:80 my-react-app
```
Open http://localhost:3000

Read: Docker commands, images, Compose, storage, networking, container
orchestration overview. Quiz: Docker quiz (linked in the handbook).

### 3. Cloud fundamentals
No hands-on required per the handbook — conceptual only for this program.
(Your earlier Angular ROADMAP.md already covers where cloud deployment
would plug in for the Student Course Portal, if you want to go further.)

### 4. GenAI Fundamentals — see `genai-fundamentals/README.md`
Full write-up: what Generative AI is, the three prompt engineering
techniques (zero-shot/few-shot/chain-of-thought) with actual example
prompts to run yourself and compare, GitHub Copilot setup + core features,
and the risks/responsible-use points likely to show up on the quiz. This
overlaps with your Prompt Engineering lab record, so most of it will be
fast review — but the hands-on prompt comparisons are worth actually doing.

## Folder contents
```
week7/
├── devops/README.md              -- DevOps & CI/CD concepts + pipeline walkthrough
├── docker-example/                -- Dockerfiles + compose (run these)
│   ├── Dockerfile.react
│   ├── Dockerfile.angular
│   └── docker-compose.yml
└── genai-fundamentals/README.md  -- GenAI concepts + prompt engineering exercises
```

## Bottom line
Week 7 is intentionally the lightest coding week — it's designed as a
wind-down before the Knowledge-Based Assessment (KBA), so there's no app
to build. But each topic now has real substance: read `devops/README.md`
and actually trace through your CI/CD pipeline, run the Docker containers
once, and run the prompt engineering exercises in `genai-fundamentals/README.md`
yourself rather than just reading about them. Then take the linked quizzes.
