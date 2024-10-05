import { parse } from '@progfay/scrapbox-parser';

class ScrapboxFetcher {
  constructor(project) {
    this.project = project;
  }

  async fetchPage(page) {
    const response = await fetch(
      `https://scrapbox.io/api/pages/${this.project}/${page}/text`,
      {
        headers: {
          Cookie: 'connect.sid=' + process.env.CONNECT_SID,
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      throw new Error('データ取得エラー');
    }

    return response.text();
  }
}

class ScrapboxParser {
  parseData(data) {
    return parse(data);
  }
}

class ScrapboxHandler {
  constructor(fetcher, parser) {
    this.fetcher = fetcher;
    this.parser = parser;
  }

  async handleRequest(req, res) {
    const { page } = req.query;

    try {
      const body = await this.fetcher.fetchPage(page);
      const result = this.parser.parseData(body);

      res.status(200).json(result);
    } catch (error) {
      console.error('Scrapboxの取得に失敗:', error);
      res.status(500).json({ error: error.message });
    }
  }
}

export default async function handler(req, res) {
  const project = 'playful';
  const fetcher = new ScrapboxFetcher(project);
  const parser = new ScrapboxParser();
  const scrapboxHandler = new ScrapboxHandler(fetcher, parser);

  await scrapboxHandler.handleRequest(req, res);
}
