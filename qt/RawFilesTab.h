#ifndef RAWFILESTAB_H
#define RAWFILESTAB_H

#include <QWidget>

namespace Ui {
class RawFilesTab;
}

class RawFilesTab : public QWidget
{
    Q_OBJECT

public:
    explicit RawFilesTab(QWidget *parent = nullptr);
    ~RawFilesTab();

private:
    Ui::RawFilesTab *ui;
};

#endif // RAWFILESTAB_H
