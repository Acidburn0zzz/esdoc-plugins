import IceCap from 'ice-cap';
import DocBuilder from './DocBuilder.js';

/**
 * Identifier output builder class.
 */
export default class IdentifiersDocBuilder extends DocBuilder {
  exec(writeFile, copyDir) {
    const ice = this._buildLayoutDoc();
    const title = this._getTitle('Reference');
    ice.load('content', this._buildIdentifierDoc());
    ice.text('title', title, IceCap.MODE_WRITE);
    writeFile('identifiers.html', ice.html);
  }

  /**
   * build identifier output.
   * @return {IceCap} built output.
   * @private
   */
  _buildIdentifierDoc() {
    const ice = new IceCap(this._readTemplate('identifiers.html'));
    ice.load('classSummary', this._buildSummaryHTML(null, 'class', 'Class Summary'), 'append');
    ice.load('interfaceSummary', this._buildSummaryHTML(null, 'interface', 'Interface Summary'), 'append');
    ice.load('functionSummary', this._buildSummaryHTML(null, 'function', 'Function Summary'), 'append');
    ice.load('variableSummary', this._buildSummaryHTML(null, 'variable', 'Variable Summary'), 'append');
    ice.load('typedefSummary', this._buildSummaryHTML(null, 'typedef', 'Typedef Summary'), 'append');
    ice.load('externalSummary', this._buildSummaryHTML(null, 'external', 'External Summary'), 'append');
    return ice;
  }
}
