#ifndef EXPLORERBAR_H
#define EXPLORERBAR_H

#include <QWidget>
#include "ClickLabel.h"

namespace Ui {
class ExplorerBar;
}

class ExplorerBar : public QWidget
{
    Q_OBJECT

public:
    explicit ExplorerBar(QWidget *parent = nullptr);
    ~ExplorerBar();

private slots:
    void onAbout();
    void onOptionsRawDDPSettings();
    void linkActivated();

private:
    Ui::ExplorerBar *ui;
};

#endif // EXPLORERBAR_H
